import React, { useState } from 'react';
import { Image, Text, View, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import InputWithIcon from '../../components/InputWithIcon';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/stack.routes';

const Authentication: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  var navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  // Function to handle login
  const handleLogin = async () => {
    setLoading(true);

    try {
      const response = await fetch('https://localhost:7209/api/authentication/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Username: email,
          Password: password,
        }),
      });

      // Check for a successful response
      if (!response.ok) {
        const errorData = await response.json();
        Alert.alert('Error', errorData?.message || 'Login failed');
        setLoading(false);
        return;
      }

      // Parse the response JSON
      const data = await response.json();

      console.log(data)

      if (data?.token) {
        await AsyncStorage.setItem('userToken', data.token);
        await AsyncStorage.setItem('userId', data.userID);
        Alert.alert('Success', 'Login successful');
        navigation.navigate('Home' as never)
      } else {
        Alert.alert('Error', 'No token received');
      }
    } catch (error) {
      console.error('Login Error:', error);
      Alert.alert('Error', 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };


  return (
    <View style={{ alignItems: 'center' }}>
      <View style={{ height: 300, width: 300 }}>
        <Image
          source={require('../../assets/img/logo.png')}
          style={{ flex: 1, height: undefined, width: undefined }}
        />
      </View>
      <InputWithIcon
        icon="person"
        placeholder="Usuário"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <InputWithIcon
        icon="lock-closed"
        placeholder="Senha"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      {loading ? (
        <ActivityIndicator size="large" color={'red'} />
      ) : (
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
          }}
          onPress={handleLogin}
        >
          <Text style={{ color: 'white' }}>Entrar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Authentication;
