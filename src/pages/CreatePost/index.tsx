import React, { useState } from 'react';
import { Dimensions, Text, TextInput, View, TouchableOpacity, Image, Alert } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CreatePost: React.FC = () => {
  const [image, setImage] = useState<string | null>('https://i0.wp.com/espaferro.com.br/wp-content/uploads/2024/06/placeholder.png?ssl=1'); // For preview
  const [imageFile, setImageFile] = useState<File | null>(null); // For FormData
  const [caption, setCaption] = useState<string>('');
  const navigation = useNavigation();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const getToken = async (): Promise<string | null> => {
    const token = await AsyncStorage.getItem('userToken');
    return token;
  };
  const getUserId = async (): Promise<string | null> => {
    const userId = await AsyncStorage.getItem('userId');
    return userId;
  };

  const handlePost = async () => {
    if (!caption.trim() && !imageFile) {
      Alert.alert('Error', 'Please add a caption or select an image.');
      return;
    }

    const formData = new FormData();
    const userId = await getUserId()

    formData.append('Caption', caption);
    formData.append('UserId', userId || '');
    if (imageFile) {
      formData.append('Image', imageFile);
    }
    try {
      const token = await getToken();
      const response = await axios.post(`${process.env.REACT_APP_API}/StrixgamPost/CreatePost`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
      Alert.alert('Success', 'Post created successfully!');
      navigation.navigate('Home' as never);
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to create post.');
    }
  };

  const dimensions = Dimensions.get('window');

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', height: dimensions.height * 0.95 }}>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      <TextInput
        placeholder='No que está pensando?'
        multiline
        onChangeText={(text) => setCaption(text)}
        numberOfLines={4}
        style={{
          alignItems: 'center',
          fontSize: 24,
          //@ts-ignore
          outlineStyle: 'none',
          textAlign: 'center',
          width: '90%',
          marginTop: 20
        }}
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,

          opacity: 0,
          cursor: 'pointer',
        }}
      />
      <TouchableOpacity onPress={handlePost} style={{ backgroundColor: '#d945d1', borderRadius: 10, marginTop: 30 }}>
        <Text style={{ padding: 5, margin: 10 }}>Adicionar foto</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => document.querySelector('input[type="file"]')?.click()}
        style={{
          backgroundColor: '#037ffc',
          height: 50,
          width: 50,
          borderRadius: 100,
          position: 'absolute',
          bottom: 40,
          right: 30,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Ionicons
          name='camera'
          color='white'
          size={20}
        />
      </TouchableOpacity>
    </View>
  )
}


export default CreatePost;