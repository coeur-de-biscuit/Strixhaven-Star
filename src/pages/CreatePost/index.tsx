import React, { useState } from 'react';
import { Dimensions, Text, TextInput, View, TouchableOpacity, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as FileSystem from 'expo-file-system';

const CreatePost: React.FC = () => {
  const [image, setImage] = useState<string>('');
  const [uploading, setUploading] = useState<boolean>(false);

  const dimensions = Dimensions.get('window');

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const uploadMedia = async () => {
    setUploading(true);

    try {
      const { uri } = await FileSystem.getInfoAsync(image);
      const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = () => {
          resolve(xhr.response);
        };
        xhr.onerror = (e) => {
          reject(new TypeError('Network request failed'))
        };
        xhr.responseType = 'blob';
        xhr.open('GET', uri, true);
        xhr.send(null)
      });

      const fileName = image.substring(image.lastIndexOf('/' + 1));
      const ref = firebase.storage().ref().child(fileName);

      await ref.put(blob);
      setUploading(false);
      Alert.alert('Catiau!!!')
      setImage('');
    } catch (error) {
      console.error(error);
      setUploading(false)
    }
  }

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', height: dimensions.height * 0.95 }}>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      <TextInput
        placeholder='No que está pensando?'
        multiline
        numberOfLines={4}
        style={{
          alignItems: 'center',
          fontSize: 24,
          //@ts-ignore
          outlineStyle: 'none',
          textAlign: 'center',
          width: '90%'
        }}
      />

      <TouchableOpacity onPress={uploadMedia} style={{ backgroundColor: '#d945d1', borderRadius: 10, marginTop: 30 }}>
        <Text style={{ padding: 5, margin: 10 }}>Adicionar foto</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={pickImage}
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