import React, { useState, useEffect } from 'react';
import { Dimensions, Image, Text, TextInput, TouchableOpacity, View, ActivityIndicator, Alert, Button } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import axios from 'axios';  // Add axios for API requests
import { RootStackParamList } from '../../routes/stack.routes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const dimensions = Dimensions.get('window');

const Profile = () => {
  const [bio, setBio] = useState('');
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [loading, setLoading] = useState(true); // For loading state
  const [error, setError] = useState(false); // For error state

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  console.log(avatar)

  // Fetch profile data
  const fetchProfile = async () => {
    try {
      const userId = await AsyncStorage.getItem('userId');
      const response = await axios.get(`${process.env.REACT_APP_API}/Profile/GetOne/${userId}`);


      if (response.status == 200) {
        const profile = response.data;
        setUsername(profile.username);
        setBio(profile.Bio || '');
        setName(profile.nome || '');
        setAvatar(`${process.env.REACT_APP_API}/${profile.avatarUrl}` || '');
      }
    } catch (error) {
      setError(true);
      console.error('Error fetching profile:', error);
    } finally {
      setLoading(false);
    }
  };
  const isFocused = useIsFocused();
  useEffect(() => {
    fetchProfile();
  }, []);

  useEffect(() => {
    fetchProfile();
  }, [isFocused]);

  const onChange = (textValue: string) => setBio(textValue);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />; // Show loading indicator while fetching data
  }

  if (error) {
    return <Text style={{ color: 'red', textAlign: 'center' }}>Failed to load profile. Please try again later.</Text>;
  }

  return (
    <View style={{ marginBottom: 20 }}>
      <Ionicons
        name="arrow-back-outline"
        size={24}
        onPress={() => navigation.goBack()}
        color={"black"}
        style={{ marginLeft: 30 }}
      />
      <View style={{ alignItems: 'center' }}>
        <View style={{ width: 100, height: 100, borderRadius: 50 }}>
          <Image
            source={{ uri: avatar || 'https://th.bing.com/th/id/OIG3.sxvvpNs.Hr5bpd8BzlHZ?pid=ImgGn' }} // Fallback if no avatar
            style={{ flex: 1, width: undefined, height: undefined, borderRadius: 50 }}
          />
        </View>
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 28, color: 'black' }}>{name}</Text>
          <Text style={{ color: 'black', alignSelf: 'center', marginBottom: 10 }}>@{username}</Text>
          <Button title='Editar Perfil' onPress={() => navigation.navigate('EditProfile' as never)} />
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', padding: 12 }}>
        <View style={{ alignItems: 'center', flexDirection: 'column' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>25</Text>
          <Text style={{ color: 'black' }}>Posts</Text>
        </View>
        <View
          style={{
            height: '100%',
            width: 1,
            backgroundColor: '#909090',
          }}
        />
        <View style={{ alignItems: 'center', flexDirection: 'column' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>250</Text>
          <Text style={{ color: 'black' }}>Followers</Text>
        </View>
        <View
          style={{
            height: '100%',
            width: 1,
            backgroundColor: '#909090',
          }}
        />
        <View style={{ alignItems: 'center', flexDirection: 'column' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>0</Text>
          <Text style={{ color: 'black' }}>Following</Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;
