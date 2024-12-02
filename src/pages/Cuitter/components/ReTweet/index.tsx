import React from 'react';
import { Dimensions, Image, Text, View } from 'react-native';

interface ReplyProps {
  avatarImage: string;
  name: string;
  profileName: string;
  time: string;
  tweetImage?: string;
  children: React.ReactNode;
}

const Reply: React.FC<ReplyProps> = ({ avatarImage, name, profileName, time, children, tweetImage }) => {
  const dimensions = Dimensions.get('window');

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        borderColor: 'gray',
        marginTop: 10,
        width: dimensions.width * 0.7, // limit width to prevent overflow
        overflow: 'hidden', // prevent content overflow
      }}
    >
      <View style={{ width: 30, height: 30, borderRadius: 10, marginRight: 5 }}>
        <Image
          source={{ uri: avatarImage }}
          style={{ flex: 1, width: undefined, height: undefined, borderRadius: 10 }}
        />
      </View>
      <View style={{ flex: 1 }}> {/* Allow content to take remaining space */}
        <View style={{ display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16, flexShrink: 1 }}>{name}</Text>
          <Text style={{ color: 'gray', flexShrink: 1 }}>@{profileName} </Text>

        </View>
        <View style={{ marginTop: 5, flexWrap: 'wrap', }}>
          {children}
          {tweetImage && (
            <View
              style={{
                width: dimensions.width * 0.5, // limit the tweet image size
                height: 300,
                borderRadius: 10,
                marginTop: 10,
                overflow: 'hidden', // prevent image overflow
              }}
            >
              <Image
                source={{ uri: tweetImage }}
                style={{ flex: 1, width: undefined, height: undefined, borderRadius: 10 }}
              />
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default Reply;
