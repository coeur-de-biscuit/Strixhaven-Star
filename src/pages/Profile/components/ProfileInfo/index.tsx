import React, { useState } from 'react';
import { Dimensions, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FIREBASE_AUTH } from '../../../../../FirebaseConfig';

const dimensions = Dimensions.get('window');

const ProfileInfo = () => {
  const [bio, setBio] = useState('');

  const onChange = (textValue: string) => setBio(textValue);

  return (
    <View style={{marginBottom: 20}}>
      <View style={{ alignItems: 'center'}}>
        <View style={{ width: 100, height: 100, borderRadius: 50 }}>
          <Image
            source={{ uri: 'https://th.bing.com/th/id/OIG.XmNgwOLSidAvsb5888MN?pid=ImgGn' }}
            style={{ flex: 1, width: undefined, height: undefined, borderRadius: 50 }}
          />
        </View>
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 28, color: 'black' }}>Nerina</Text>
          <Text style={{ color: 'black' }}>Prismeer, Faerie</Text>
        </View>
        <View style={{marginVertical: 20, flexDirection: 'row', justifyContent: 'space-evenly', width: '60%'}}>
          <TouchableOpacity>
            <View style={{ backgroundColor: '#FF3CE0', padding: 10, borderRadius: 30 }}>
              <Text style={{ marginHorizontal: 20, color: 'white', fontWeight: 'bold' }}>Seguir </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={(() => FIREBASE_AUTH.signOut())}>
            <View style={{ backgroundColor: '#1bb5db', padding: 10, borderRadius: 30 }}>
              <Text style={{ marginHorizontal: 20, color: 'white', fontWeight: 'bold' }}>Sair</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', padding: 12 }}>
        <View style={{ alignItems: 'center', flexDirection: 'column' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>25</Text>
          <Text style={{ color: 'black' }}>Posts</Text>
        </View>
        <View style={{
          height: '100%',
          width: 1,
          backgroundColor: '#909090',
        }} />
        <View style={{ alignItems: 'center', flexDirection: 'column' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>250</Text>
          <Text style={{ color: 'black' }}>Seguidores</Text>
        </View>
        <View style={{
          height: '100%',
          width: 1,
          backgroundColor: '#909090',
        }} />
        <View style={{ alignItems: 'center', flexDirection: 'column' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>0</Text>
          <Text style={{ color: 'black' }}>Seguindo</Text>
        </View>


      </View>
    </View>
  );
}

export default ProfileInfo;