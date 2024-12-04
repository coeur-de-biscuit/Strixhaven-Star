import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Alert,
  TextInput,
  Button,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from '@expo/vector-icons/Ionicons';

interface Comment {
  commentId: number;
  postId: number;
  content: string;
  user: {
    id: number;
    nome: string;
    username: string;
    avatarUrl: string;
  };
  replies?: Comment[];
}

interface Props {
  postId: number;
  avatar: string
}

const Comments: React.FC<Props> = ({ postId, avatar }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [commentText, setCommentText] = useState<string>('');
  const [replyText, setReplyText] = useState<string>('');
  const [replyTo, setReplyTo] = useState<Comment | null>(null);


  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API}/StrixgamInteraction/GetCommentsForPost/${postId}`
        );
        setComments(response.data);
      } catch (error: any) {
        console.error(error);
        Alert.alert('Error', error.response?.data || 'Failed to fetch comments.');
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [postId]);

  const handleCommentSubmit = async () => {
    if (commentText.trim() === '') {
      Alert.alert('Error', 'Please enter a comment.');
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/StrixgamInteraction/CommentOnPost`,
        {
          Content: commentText,
          UserId: await AsyncStorage.getItem('userId'),
          PostId: postId,
        }
      );
      setComments([response.data, ...comments]);
      setCommentText('');
    } catch (error: any) {
      console.error(error);
      Alert.alert('Error', 'Failed to post comment.');
    }
  };

  const handleReplySubmit = async () => {
    if (replyText.trim() === '' || replyTo === null) {
      Alert.alert('Error', 'Please enter a reply.');
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/StrixgamInteraction/CommentOnPost`,
        {
          Content: replyText,
          UserId: await AsyncStorage.getItem('userId'),
          PostId: postId,
          ParentCommentId: replyTo,
        }
      );

      setComments((prevComments) => {
        const addReply = (comments: Comment[]): Comment[] =>
          comments.map((comment) =>
            comment.commentId === replyTo.commentId
              ? { ...comment, replies: [...(comment.replies || []), response.data] }
              : { ...comment, replies: addReply(comment.replies || []) }
          );
        return addReply(prevComments);
      });

      setReplyText('');
      setReplyTo(null);
    } catch (error: any) {
      console.error(error);
      Alert.alert('Error', 'Failed to post reply.');
    }
  };

  const renderComment = (comment: Comment, level: number = 0) => (
    <View key={comment.commentId} style={[styles.commentContainer, { marginLeft: 20 * level }]}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={{ uri: `${process.env.REACT_APP_API}/${comment.user.avatarUrl}` }} style={styles.avatar} />
        <View style={{ width: '100%' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.userName}>{comment.user.nome} - </Text>
            <Text style={styles.username}>@{comment.user.username}</Text>
          </View>
          <View style={styles.commentDetails}>
            <Text style={styles.commentContent}>{comment.content}</Text>
            {level === 0 && <Text style={{ fontSize: 10, fontWeight: 'bold', color: 'gray' }} onPress={() => setReplyTo(comment)}>Responder</Text>}
          </View>

        </View>
      </View>
      <View style={{ marginTop: 10 }}>
        {comment.replies?.map((reply) => renderComment(reply, level + 1))}
      </View>
    </View>
  );


  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={comments}
        renderItem={({ item }) => renderComment(item)}
        contentContainerStyle={styles.listContainer}
        style={{ maxHeight: 250 }}
      />
      <View >
        {replyTo && (

          <View style={{
            padding: 10,
            elevation: 7,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',

          }}>
            <Text>Respondendo a {replyTo.user.username}</Text>
            <Ionicons name='close' color={'red'} size={16} />
          </View>
        )}
        <View style={{ flexDirection: 'row' }}>
          <Image source={{ uri: `${process.env.REACT_APP_API}/${avatar}` }} style={styles.avatar} />
          <TextInput
            style={styles.commentInput}
            placeholder={replyTo ? 'Add a reply...' : 'Add a comment...'}
            value={replyTo ? replyText : commentText}
            onChangeText={replyTo ? setReplyText : setCommentText}
          />
          <Button title={replyTo ? 'Post Reply' : 'Post Comment'} onPress={replyTo ? handleReplySubmit : handleCommentSubmit} />
        </View>
      </View>
    </View>
  );
};

export default Comments;

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    padding: 10,
  },
  commentContainer: {
    flexDirection: 'column',
    marginBottom: 15,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,

    alignSelf: 'flex-start'
  },
  commentDetails: {
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  username: {
    fontSize: 12,
    color: 'gray',
  },
  commentContent: {
    marginTop: 5,
    fontSize: 12,
  },
  commentInputContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  commentInput: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
    marginRight: 10,
  },
});
