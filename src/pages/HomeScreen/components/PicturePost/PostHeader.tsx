import React, { useState } from 'react';
import { Dimensions, Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

interface HeaderProps {
  user_thumb: string;
  user_name: string;
  location: string;
  remove: () => void
}

const PostHeader = ({ user_thumb, user_name, location, remove }: HeaderProps) => {
  const _styles = styles;
  const [isDialogVisible, setIsDialogVisible] = useState(false); // State to control dialog visibility
  const dimensions = Dimensions.get('window');
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

        <Pressable onPress={() => setIsDialogVisible(true)}>
          <Ionicons name="ellipsis-horizontal" size={20} color="gray" />
        </Pressable>
      </View>

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

