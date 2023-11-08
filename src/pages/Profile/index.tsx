import React from 'react';
import { Dimensions, View } from 'react-native';
import ProfileInfo from './components/ProfileInfo';

const dimensions = Dimensions.get('window');

const Profile = () => {
  return (
    <View style={{ backgroundColor: '#0B0222', justifyContent: 'space-between', height: dimensions.height }}>
      <View style={{ margin: 30 }}>
        <ProfileInfo />
      </View>
      <View style={{ width: '100%', height: dimensions.height * 0.6, backgroundColor: 'white', borderRadius: 30 }}>
      </View>
    </View>
  );
}

export default Profile;