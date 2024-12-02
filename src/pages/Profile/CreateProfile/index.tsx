import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Image, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../routes/stack.routes';

const EditProfile = () => {
  const [bio, setBio] = useState('');
  const [nome, setNome] = useState('');
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState<string | null>('https://th.bing.com/th/id/OIG3.cBihXbs3Tc0LnDwqVXXr?pid=ImgGn'); // For preview
  const [avatarFile, setAvatarFile] = useState<File | null>(null); // For FormData

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setAvatarFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatar(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const saveProfile = async () => {
    const userId = await AsyncStorage.getItem('userId');

    const formData = new FormData();
    formData.append('Nome', nome);
    formData.append('Username', username);
    formData.append('UserId', userId);

    if (avatarFile) {
      formData.append('AvatarImage', avatarFile, avatarFile.name);
    }

    try {
      const response = await axios.put(`https://localhost:7209/Profile/Update/${userId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
        Alert.alert('Success', 'Profile created successfully!');
      } else {
        Alert.alert('Error', 'Failed to create profile');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Something went wrong while creating the profile.');
    }
  };
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={{ padding: 20 }}>
      <Ionicons
        name="arrow-back-outline"
        size={24}
        onPress={() => navigation.goBack()}
        color={"black"}
        style={{ marginLeft: 30 }}
      />
      <View style={{ alignItems: 'center', position: 'relative' }}>
        {/* Hidden file input */}
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0,
            cursor: 'pointer',
          }}
        />
        {/* Image Preview */}
        {avatar && (
          <View
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
            }}
          >
            <Image
              source={{ uri: avatar }}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: 50,
              }}
            />
          </View>
        )}
        {/* Clickable text for changing the avatar */}
        <TouchableOpacity onPress={() => document.querySelector('input[type="file"]')?.click()}>
          <Text style={{ marginTop: 10, color: '#3f3a5e', fontWeight: 'bold' }}>Change Avatar</Text>
        </TouchableOpacity>
      </View>

      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        style={{
          padding: 10,
          borderRadius: 8,
          border: '1px solid #ccc',
          marginTop: 10,
          width: '100%',
        }}
      />
      <input
        type="text"
        placeholder="User Name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{
          padding: 10,
          borderRadius: 8,
          border: '1px solid #ccc',
          marginTop: 10,
          width: '100%',
        }}
      />

      <TouchableOpacity
        onPress={saveProfile}
        style={{
          backgroundColor: '#3f3a5e',
          padding: 10,
          borderRadius: 8,
          marginTop: 20,
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white' }}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditProfile;
