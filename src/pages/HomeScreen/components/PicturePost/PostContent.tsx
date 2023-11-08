import React from 'react';
import { Image, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

interface ContentProps {
  post_image: string;
}

const PostContent = ({ post_image }: ContentProps) => {
  return (
    <View style={{marginTop: 10}}>
      <View style={{ width: '100%', borderRadius: 15, height: 500, }}>
        <Image
          source={{ uri: post_image }}
          style={{ flex: 1, width: undefined, height: undefined, borderRadius: 30 }}
        />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10}}>
        <View style={{flexDirection: 'row', alignItems: 'center', width: 120, justifyContent: 'space-between'}}>
          <Ionicons name="heart-outline" size={36} />
          <Ionicons name="chatbubble-outline" size={32} />
          <Ionicons name="paper-plane-outline" size={32} />
        </View>
        <Ionicons name="bookmark-outline" size={32} />
      </View>
    </View>

  );
}

export default PostContent;