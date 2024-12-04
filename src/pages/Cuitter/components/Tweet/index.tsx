import React, { useState } from 'react';
import { Dimensions, Image, Modal, Pressable, Text, TouchableOpacity, View } from 'react-native';
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
  hasImage: boolean;
  children: React.ReactNode;
  navigate?: () => void;
  remove: () => void;
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
  hasImage,
  navigate,
  remove
}) => {
  const [isDialogVisible, setIsDialogVisible] = useState(false); // State to control dialog visibility
  const dimensions = Dimensions.get('window');

  let uri: string = "https://localhost:7209/" + tweetImage;

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

        <View style={{ flex: 1 }}>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{name}</Text>
              <Text style={{ color: 'gray' }}>@{profileName} - {time}</Text>
            </View>
            <Pressable onPress={() => setIsDialogVisible(true)}>
              <Ionicons name="ellipsis-horizontal" size={20} color="gray" />
            </Pressable>
          </View>

          <View style={{ width: dimensions.width * 0.7, marginTop: 5 }}>
            {hasReply ? (
              <>
                {hasImage && (
                  <View style={{ width: '100%', height: 300, borderRadius: 10, marginRight: 10, marginTop: 10 }}>
                    <Image
                      source={{ uri: uri }}
                      style={{ flex: 1, width: undefined, height: undefined, borderRadius: 10 }}
                    />
                  </View>
                )}
                {children}
              </>
            ) : (
              <>
                {children}
                {hasImage && (
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

      {/* Modal for the delete dialog */}
      <Modal
        visible={isDialogVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setIsDialogVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ width: 300, padding: 20, backgroundColor: 'white', borderRadius: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Delete Tweet</Text>
            <Text style={{ marginBottom: 20 }}>Are you sure you want to delete this tweet?</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <Pressable onPress={() => setIsDialogVisible(false)} style={{ padding: 10 }}>
                <Text style={{ color: 'blue' }}>Cancel</Text>
              </Pressable>
              <Pressable onPress={remove} style={{ padding: 10 }}>
                <Text style={{ color: 'red' }}>Delete</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Tweet;
