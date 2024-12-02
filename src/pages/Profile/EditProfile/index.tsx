import React, { useState } from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View, Alert } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../routes/stack.routes';
import InputWithIcon from '../../../components/InputWithIcon';
import * as ImagePicker from 'expo-image-picker';

const dimensions = Dimensions.get('window');

const EditProfile = () => {
  const [bio, setBio] = useState('');
  const [nome, setNome] = useState('');
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState(
    'https://th.bing.com/th/id/OIG3.sxvvpNs.Hr5bpd8BzlHZ?pid=ImgGn'
  ); // Default avatar

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // Function to pick an image
  const pickImage = async () => {
    // Ask for permission to access the media library
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert('Permission Denied', 'You need to grant camera roll permissions to select an avatar.');
      return;
    }

    // Launch the image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1], // Ensure a square aspect ratio
      quality: 0.5, // Lower quality for optimization
    });

    if (!result.canceled) {
      setAvatar(result.assets[0].uri); // Update the avatar with the selected image
    }
  };

  return (
    <View style={{ marginBottom: 20 }}>
      <Ionicons
        name="arrow-back-outline"
        size={24}
        onPress={() => navigation.goBack()}
        color={'black'}
        style={{ marginLeft: 30 }}
      />
      <View style={{ alignItems: 'center' }}>
        {/* Avatar Picker */}
        <TouchableOpacity onPress={pickImage}>
          <View style={{ width: 100, height: 100, borderRadius: 50, overflow: 'hidden' }}>
            <Image
              source={{ uri: avatar }}
              style={{ flex: 1, width: undefined, height: undefined }}
            />
          </View>
        </TouchableOpacity>
        <Text style={{ marginTop: 10, color: '#3f3a5e', fontWeight: 'bold' }}>Change Avatar</Text>

        <View>
          <InputWithIcon
            icon="person"
            placeholder="Nome"
            value={nome}
            onChangeText={(text) => setNome(text)}
          />
          <InputWithIcon
            icon="person"
            placeholder="User Name"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />

          <TouchableOpacity
            style={{
              backgroundColor: '#3f3a5e',
              padding: 10,
              borderRadius: 8,
              marginHorizontal: 10,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              width: 220,
              marginTop: 20,
            }}
          // Add your API call for updating the profile here
          >
            <Text style={{ color: 'white' }}>Save Changes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EditProfile;
