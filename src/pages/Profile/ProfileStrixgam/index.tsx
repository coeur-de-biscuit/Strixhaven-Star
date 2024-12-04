import React, { useEffect, useState, useRef } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import { PicturePost } from '../../HomeScreen/components/PicturePost';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

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

const ProfileStrixgan: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const profileId = 1; // Replace with dynamic profile ID if needed
  const bottomSheetModalRef = useRef<BottomSheetModal>(null); // Reference to BottomSheetModal

  const getToken = async (): Promise<string | null> => {
    const token = await AsyncStorage.getItem('userToken');
    return token;
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const token = await getToken();
        const response = await axios.get(
          `https://localhost:7209/StrixgamPost/GetByProfileId/${profileId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, [profileId]);

  const deleteTweet = async (id: number) => {
    try {
      const token = await getToken();
      await axios.delete(`https://localhost:7209/StrixgamPost/Delete/${id}`, {
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
    setSelectedPost(post); // Store the selected post
    bottomSheetModalRef.current?.present(); // Open the bottom sheet modal
  };

  return (
    <BottomSheetModalProvider>
      <View style={{ flex: 1, padding: 20 }}>
        <ScrollView>
          {posts.length > 0 ? (
            posts.map((post) => (
              <PicturePost.Root key={post.id}>
                <PicturePost.PostHeader
                  user_thumb={`https://localhost:7209/${post.userAvatar}`}
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
                    post_image={`https://localhost:7209/${post.contentImage}`}
                    pressComment={() => openCommentDrawer(post)} // Open bottom drawer
                  />
                )}
              </PicturePost.Root>
            ))
          ) : (
            <Text>No posts found for this profile.</Text>
          )}
        </ScrollView>

        {/* Bottom Sheet Modal */}
        <BottomSheetModal
          ref={bottomSheetModalRef}
          snapPoints={['50%']} // Height of the drawer
          backgroundStyle={{ backgroundColor: '#fff', borderRadius: 20 }}
        >
          {selectedPost ? (
            <View style={{ padding: 20 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                Comment on {selectedPost.userName}'s post
              </Text>
              <Text style={{ marginTop: 10 }}>{selectedPost.content}</Text>
              {/* Add comment form or content here */}
            </View>
          ) : (
            <Text>Loading...</Text>
          )}
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

export default ProfileStrixgan;
