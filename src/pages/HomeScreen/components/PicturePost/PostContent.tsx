import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

interface ContentProps {
  post_image: string;
  pressComment: () => void;
}

const PostContent = ({ post_image, pressComment }: ContentProps) => {
  return (
    <View style={{ marginTop: 10 }}>
      <View style={{ width: '100%', borderRadius: 15, height: 500, }}>
        <Image
          source={{ uri: post_image }}
          style={{ flex: 1, width: undefined, height: undefined, borderRadius: 30 }}
        />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="heart-outline" size={36} />
            <Text style={{ marginLeft: 5 }}>Like</Text>
          </View>
          <Pressable onPress={pressComment} style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="chatbubble-outline" size={32} />
            <Text style={{ marginLeft: 5 }}>Comment</Text>
          </Pressable>

        </View>

      </View>
    </View>

  );
}

export default PostContent;