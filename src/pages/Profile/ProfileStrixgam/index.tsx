import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  Alert,
  Modal,
  Animated,
  PanResponder,
  TouchableWithoutFeedback,
} from 'react-native';
import { PicturePost } from '../../HomeScreen/components/PicturePost';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Comments from '../components';

interface Post {
  id: number;
  content: string;
  contentImage: string;
  userId: number;
  userName: string;
  profileName: string;
  userAvatar: string;
  hasImage: boolean;
}

const BottomDrawer: React.FC<{
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}> = ({ isVisible, onClose, children }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) =>
        Math.abs(gestureState.dy) > 5,
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dy > 0) {
          animatedValue.setValue(gestureState.dy);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 100) {
          onClose();
        } else {
          Animated.spring(animatedValue, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  useEffect(() => {
    if (isVisible) {
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <Modal transparent animationType="fade" visible={isVisible}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }} />
      </TouchableWithoutFeedback>
      <Animated.View
        {...panResponder.panHandlers}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: '#fff',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          transform: [{ translateY: animatedValue }],
          padding: 20,
          maxHeight: '70%',
        }}
      >
        {children}
      </Animated.View>
    </Modal>
  );
};

const ProfileStrixgan: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isDrawerVisible, setDrawerVisible] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [avatar, setAvatar] = useState<string>('');
  const [userId, setUserId] = useState<string>('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        const avatar = await AsyncStorage.getItem('avatarUrl');
        const userId = await AsyncStorage.getItem('userId');

        const response = await axios.get(
          `${process.env.REACT_APP_API}/StrixgamPost/GetByProfileId/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setPosts(response.data)
        setAvatar(avatar || '')
        setUserId(userId || '')
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, [userId]);

  const deleteTweet = async (id: number) => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      await axios.delete(`${process.env.REACT_APP_API}/StrixgamPost/Delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      Alert.alert('Success', 'Tweet deleted successfully!');
      setPosts((prevTweets) => prevTweets.filter((tweet) => tweet.id !== id));
    } catch (err: any) {
      console.error(err);
      if (err.response?.status === 401) {
        Alert.alert('Error', 'Unauthorized. Please log in.');
      } else {
        Alert.alert('Error', 'Failed to delete tweet.');
      }
    }
  };

  const openCommentDrawer = (post: Post) => {
    setSelectedPost(post);
    setDrawerVisible(true);
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <ScrollView>
        {posts.length > 0 ? (
          posts
            .slice() // Create a shallow copy of the array to avoid mutating the original
            .reverse() // Reverse the order of the posts
            .map((post) => (
              <>
                <PicturePost.Root key={post.id}>
                  <PicturePost.PostHeader
                    user_thumb={`${process.env.REACT_APP_API}/${post.userAvatar}`}
                    user_name={post.userName}
                    location={post.profileName}
                    remove={() => deleteTweet(post.id)}
                  />
                  <PicturePost.PostDescription
                    user_name={post.profileName}
                    description={post.content}
                  />
                  {post.hasImage && (
                    <PicturePost.PostContent
                      post_image={`${process.env.REACT_APP_API}/${post.contentImage}`}
                      pressComment={() => openCommentDrawer(post)}
                    />
                  )}
                </PicturePost.Root>


              </>
            ))
        ) : (
          <Text>No posts found for this profile.</Text>
        )}
      </ScrollView>
      <BottomDrawer
        isVisible={isDrawerVisible}
        onClose={() => setDrawerVisible(false)}
      >
        {selectedPost ? (
          <View>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
              Comentários na postagem de {selectedPost.userName}
            </Text>
            <Text style={{ marginTop: 10 }}>{selectedPost.content}</Text>
            <Comments avatar={avatar} postId={selectedPost.id} />
          </View>
        ) : (
          <Text>Loading...</Text>
        )}
      </BottomDrawer>

    </View>
  );
};

export default ProfileStrixgan;
