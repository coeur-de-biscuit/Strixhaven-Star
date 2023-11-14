import React, { useState, useContext } from 'react';
import { Image, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import InputWithIcon from '../../components/InputWithIcon';
import { FIREBASE_AUTH } from '../../../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { AuthContext } from '../../contexts/Auth/AuthContext';


const Authentication: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password)
      console.log(response);
    } catch (error: any) {
      console.log(error);
      alert('Registration failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  }

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password)
      console.log(response);
      alert('Check your e-mail');
    } catch (error: any) {
      console.log(error);
      alert('Registration failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  }


  return (
    <View style={{ alignItems: 'center' }}>
      <View style={{ height: 300, width: 300 }}>
        <Image
          source={require('../../assets/img/logo.png')}
          style={{ flex: 1, height: undefined, width: undefined }}
        />
      </View>
      <InputWithIcon
        icon='person'
        placeholder='Usuario'
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <InputWithIcon
        icon='lock-closed'
        placeholder='Senha'
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      {
        loading ? <ActivityIndicator size='large' color={'red'} />
          :
          <>
            <TouchableOpacity
              onPress={signIn}
              style={{
                backgroundColor: '#3f3a5e',
                padding: 10,
                borderRadius: 8,
                marginHorizontal: 10,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: 220
              }}>
              <Text style={{ color: 'white' }}>Entrar</Text>
            </TouchableOpacity>

           
          </>
      }

    </View>
  );
}

export default Authentication;