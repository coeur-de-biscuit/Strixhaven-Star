import React, { useState } from 'react';
import { Dimensions, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../routes/stack.routes';
const dimensions = Dimensions.get('window');

const ProfileInfoAmy = () => {
  const [bio, setBio] = useState('');
  var navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const onChange = (textValue: string) => setBio(textValue);

  return (
    <View style={{ marginBottom: 20 }}>
      <Ionicons
        name='arrow-back-outline'
        size={24}
        onPress={() => navigation.goBack()}
        color={'black'}
        style={{ marginLeft: 30 }}
      />
      <View style={{ alignItems: 'center' }}>
        <View style={{ width: 100, height: 100, borderRadius: 50 }}>
          <Image
            source={{ uri: 'https://th.bing.com/th/id/OIG3.sxvvpNs.Hr5bpd8BzlHZ?pid=ImgGn' }}
            style={{ flex: 1, width: undefined, height: undefined, borderRadius: 50 }}
          />
        </View>
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 28, color: 'black' }}>Amelia Moonflower</Text>
          <Text style={{ color: 'black', alignSelf: 'center' }}>Prismeer, Faerie</Text>
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

export default ProfileInfoAmy;