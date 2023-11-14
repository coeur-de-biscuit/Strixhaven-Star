import React from 'react';
import { Text, View } from 'react-native';

interface DescriptionProps {
  user_name: string;
  description: string;
  mentions?: string
}

const PostDescription = ({ user_name, description, mentions }: DescriptionProps) => {
  return (
    <View style={{ marginTop: 20, width: '90%', marginLeft: 5}}>
      <Text>
        <Text>{description}</Text>
        <Text style={{ color: '#426eff' }}> {mentions}</Text>
      </Text>
    </View>
  );
}

export default PostDescription;