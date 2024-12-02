import React from 'react';
import { Dimensions, Image, Pressable, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

interface TweetProps {
  avatarImage: string;
  name: string;
  profileName: string;
  time: string;
  likes: number;
  reTweets: number;
  comments: number;
  tweetImage?: string;
  repostName?: string;
  hasReply?: boolean;
  children: React.ReactNode;
  navigate?: () => void;
}

const Tweet: React.FC<TweetProps> = ({
  avatarImage,
  name,
  profileName,
  time,
  likes,
  reTweets,
  comments,
  children,
  tweetImage,
  repostName,
  hasReply,
  navigate
}) => {
  const dimensions = Dimensions.get('window');

  return (
    <>
      {repostName && (
        <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 30, gap: 10, alignItems: 'center', marginBottom: 15 }}>
          <Ionicons name="sync-outline" size={15} color="gray" />
          <Text style={{ color: 'gray', fontSize: 12 }}>{repostName} repostou</Text>
        </View>
      )}

      <View style={{ display: 'flex', flexDirection: 'row', gap: 10, marginBottom: 20 }}>
        <TouchableOpacity onPress={navigate} style={{ width: 50, height: 50, borderRadius: 10, marginRight: 10 }}>
          <Image
            source={{ uri: avatarImage }}
            style={{ flex: 1, width: undefined, height: undefined, borderRadius: 10 }}
          />
        </TouchableOpacity>

        <View>
          <View style={{ display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{name}</Text>
            <Text style={{ color: 'gray' }}>@{profileName} - {time}</Text>
          </View>

          <View style={{ width: dimensions.width * 0.7, marginTop: 5 }}>
            {hasReply ? (
              <>
                {tweetImage && (
                  <View style={{ width: '100%', height: 300, borderRadius: 10, marginRight: 10, marginTop: 10 }}>
                    <Image
                      source={{ uri: tweetImage }}
                      style={{ flex: 1, width: undefined, height: undefined, borderRadius: 10 }}
                    />
                  </View>
                )}
                {children}
              </>
            ) : (
              <>
                {children}
                {tweetImage && (
                  <View style={{ width: '100%', height: 300, borderRadius: 10, marginRight: 10, marginTop: 10 }}>
                    <Image
                      source={{ uri: tweetImage }}
                      style={{ flex: 1, width: undefined, height: undefined, borderRadius: 10 }}
                    />
                  </View>
                )}

              </>
            )}
          </View>

          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5 }}>
              <Ionicons name="chatbox-outline" size={20} color="gray" />
              <Text style={{ fontSize: 15, color: 'gray' }}>{comments}</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5 }}>
              <Ionicons name="sync-outline" size={20} color="gray" />
              <Text style={{ fontSize: 15, color: 'gray' }}>{reTweets}</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5 }}>
              <Ionicons name="heart-outline" size={20} color="gray" />
              <Text style={{ fontSize: 15, color: 'gray' }}>{likes}</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Tweet;
