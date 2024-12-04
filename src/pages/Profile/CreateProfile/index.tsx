import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Image, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../routes/stack.routes';
import Toast from 'react-native-toast-message';

const EditProfile = () => {
  const [bio, setBio] = useState('');
  const [nome, setNome] = useState('');
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState<string | null>('https://i0.wp.com/espaferro.com.br/wp-content/uploads/2024/06/placeholder.png?ssl=1'); // For preview
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
    //@ts-ignore
    formData.append('UserId', userId);

    if (avatarFile) {
      formData.append('AvatarImage', avatarFile, avatarFile.name);
    }

    try {
      const response = await axios.put(`${process.env.REACT_APP_API}/Profile/Update/${userId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 204) {
        Toast.show({
          type: 'success',
          text1: 'Profile Updated',
          text2: 'Your profile changes have been saved successfully.',
        });
        navigation.goBack();
      } else {
        Toast.show({
          type: 'error',
          text1: 'Update Failed',
          text2: 'Unable to update your profile. Please try again later.',
        });
      }
    } catch (error) {
      console.error(error);
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'An error occurred while updating the profile.',
      });
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
