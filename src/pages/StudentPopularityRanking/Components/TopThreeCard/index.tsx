import React from 'react';
import { View, Image, Text } from 'react-native';
import {
  ImageProps as DefaultImageProps,
  ImageURISource,
} from 'react-native';

interface TopThreeCardProps {
  image: ImageURISource ;
  position: string;
  name: string;
  collegeName: string;
  size: number;
}
 
const TopThreeCard = ({ image, position, name, collegeName, size }: TopThreeCardProps) => {
  return (
    <View>
      <View>
        <View style={{ height: size, width: size, borderRadius: 100 }}>
          <Image
            source={image}
            style={{ flex: 1, height: undefined, width: undefined, borderRadius: 100 }}
          />

        </View>
        <View style={{ alignSelf: 'center', position: 'absolute', bottom: -10, marginTop: 20 }}>
          <View style={{ backgroundColor: '#FF856F', alignSelf: 'center', alignItems: 'center', borderRadius: 100, width: 26, height: 26, borderWidth: 1, borderColor: 'white', justifyContent: 'center' }}>
            <Text style={{ margin: 4, alignSelf: 'center', fontWeight: 'bold', color: 'white' }}>{position}</Text>
          </View>
        </View>
      </View>
      <View style={{ alignItems: 'center', marginTop: 15 }}>
        <Text style={{ fontWeight: 'bold', color: '#020202' }}>{name}</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 12, color: '#7e7b7b' }}>{collegeName}</Text>
      </View>
    </View>
  );
}

export default TopThreeCard;