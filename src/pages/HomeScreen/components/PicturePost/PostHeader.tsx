import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

interface HeaderProps {
  user_thumb: string;
  user_name: string;
  location: string;
}

const PostHeader = ({ user_thumb, user_name, location}: HeaderProps) => {
  const _styles = styles;

  return (
    <View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ width: 50, height: 50, borderRadius: 10, marginRight: 20 }}>
            <Image
              source={{ uri: user_thumb }}
              style={{ flex: 1, width: undefined, height: undefined, borderRadius: 10 }}
            />
          </View>

          <View>
            <Text style={_styles.user_name}>{user_name}</Text>
            <Text style={_styles.location}>{location}</Text>
          </View>
        </View>
        <Ionicons name="ellipsis-vertical-outline" size={32} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  user_name: {
    fontWeight: 'bold',
    fontSize: 20
  },
  location: {
    fontSize: 12,
    color: '#757575'
  }
});

export default PostHeader;

