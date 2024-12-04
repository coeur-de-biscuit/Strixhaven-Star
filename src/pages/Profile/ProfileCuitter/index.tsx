import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Text, Button, Alert, FlatList } from 'react-native';
import axios from 'axios';
import Tweet from '../../Cuitter/components/Tweet';
import HorizontalDivider from '../../../components/HorizontalDivider';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileCuitter: React.FC = () => {
  const [tweets, setTweets] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [hasImage, setHasImage] = useState<boolean>(false);

  const getToken = async (): Promise<string | null> => {
    const token = await AsyncStorage.getItem('userToken');
    return token;
  };

  const fetchTweets = async (profileId: number) => {
    try {
      const token = await getToken();
      const response = await axios.get(`${process.env.REACT_APP_API}/CuitterPost/GetByProfileId/${profileId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTweets(response.data);
    } catch (err: any) {
      console.error(err);
      if (err.response?.status === 401) {
        setError('Unauthorized. Please log in.');
      } else {
        setError('Failed to fetch tweets.');
      }
    } finally {
      setLoading(false);
    }
  };

  const deleteTweet = async (id: number) => {
    try {
      const token = await getToken();
      await axios.delete(`${process.env.REACT_APP_API}/CuitterPost/Delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      Alert.alert('Success', 'Tweet deleted successfully!');
      setTweets(prevTweets => prevTweets.filter(tweet => tweet.id !== id)); // Remove deleted tweet from state
    } catch (err: any) {
      console.error(err);
      if (err.response?.status === 401) {
        Alert.alert('Error', 'Unauthorized. Please log in.');
      } else {
        Alert.alert('Error', 'Failed to delete tweet.');
      }
    }
  };


  useEffect(() => {
    const profileId = 1; // Replace with dynamic profile ID as needed
    fetchTweets(profileId);
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#3f3a5e" />;
  }

  if (error) {
    return <Text style={{ color: 'red', textAlign: 'center' }}>{error}</Text>;
  }

  if (!tweets.length) {
    return <Text style={{ textAlign: 'center', marginTop: 20 }}>No tweets found for this profile.</Text>;
  }



  return (
    <View style={{ padding: 20 }}>
      <FlatList
        data={tweets}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={HorizontalDivider}
        inverted
        renderItem={({ item }) => (
          <View>
            <Tweet
              avatarImage={`${process.env.REACT_APP_API}/${item.userAvatar}`}
              name={item.userName}
              profileName={item.profileName}
              comments={10} // Placeholder
              likes={50} // Placeholder
              reTweets={4} // Placeholder
              time="4h" // Placeholder
              hasImage={item.hasImage}
              tweetImage={`${process.env.REACT_APP_API}/${item.contentImage}`}
              remove={() => deleteTweet(item.id)}
            >
              {item.content}
            </Tweet>
          </View>
        )}
      />
    </View>
  );
};

export default ProfileCuitter;
