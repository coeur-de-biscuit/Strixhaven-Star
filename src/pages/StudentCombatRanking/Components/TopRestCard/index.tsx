import React from 'react';
import { Image, ImageURISource, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

interface TopRestCardProps {
  position: number;
  isUp: boolean;
  isDown: boolean;
  name: string;
  college: string;
  image: ImageURISource;
}

const TopRestCard = ({ position, isDown, isUp, name, college, image}: TopRestCardProps) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
      <View style={{ alignItems: 'center', justifyContent: 'center', width: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{position}</Text>
        {
          isUp ?
            <Ionicons
              name='caret-up-outline'
              color='#1bf25b'
              size={16}
            />
            :
            <></>
        }
        {
          isDown ?
            <Ionicons
              name='caret-down-outline'
              color='#f2291b'
              size={16}
            />
            :
            <></>
        }

      </View>
      <View style={{ height: 60, width: 60, borderRadius: 100, marginLeft: 10 }}>
        <Image
          source={image}
          style={{ flex: 1, height: undefined, width: undefined, borderRadius: 100 }}
        />
      </View>
      <View style={{ marginLeft: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{name}</Text>
        <Text style={{ color: '#807979' }}>{college}</Text>
      </View>
    </View>
  );
}

export default TopRestCard;