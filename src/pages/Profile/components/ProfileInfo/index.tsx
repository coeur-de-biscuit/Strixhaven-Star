import React, { useState } from 'react';
import { Dimensions, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

const dimensions = Dimensions.get('window');

const ProfileInfo = () => {
  const [bio, setBio] = useState('');

  const onChange = (textValue: string) => setBio(textValue);

  return (
    <View >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ width: 100, height: 100, borderRadius: 50 }}>
          <Image
            source={{ uri: 'https://th.bing.com/th/id/OIG.XmNgwOLSidAvsb5888MN?pid=ImgGn' }}
            style={{ flex: 1, width: undefined, height: undefined, borderRadius: 50 }}
          />
        </View>
        <View style={{ marginLeft: 20 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 28, color: 'white' }}>Nerina</Text>
          <Text style={{ color: 'white' }}>Prismeer, Faerie</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 12 }}>
        <View style={{ alignItems: 'center', flexDirection: 'column' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>250</Text>
          <Text style={{ color: 'white' }}>Seguidores</Text>
        </View>
        <View style={{
          height: '100%',
          width: 1,
          backgroundColor: '#909090',
        }} />
        <View style={{ alignItems: 'center', flexDirection: 'column' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>0</Text>
          <Text style={{ color: 'white' }}>Seguindo</Text>
        </View>
        <View style={{
          height: '100%',
          width: 1,
          backgroundColor: '#909090',
        }} />
        <TouchableOpacity>
          <View style={{ backgroundColor: '#FF3CE0', padding: 10, borderRadius: 30 }}>
            <Text style={{ marginHorizontal: 20, color: 'white', fontWeight: 'bold' }}>Seguir</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TextInput
        multiline
        style={{ height: 100, color: 'white' }}
        spellCheck={false}
        onChangeText={onChange}
        value={bio}
      />
    </View>
  );
}

export default ProfileInfo;