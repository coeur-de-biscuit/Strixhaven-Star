import React from 'react';
import { Dimensions, Image, Text, View, TouchableOpacity } from 'react-native';

interface FeatureNewsProps {
  image: string;
  title: string;
  onPress: () => void;
}

const dimensions = Dimensions.get('window');

const FeatureNews = ({ image, title, onPress }: FeatureNewsProps) => {
  return (
      <TouchableOpacity onPress={onPress}>
        <View style={{ height: 300, width: dimensions.width * 0.75, borderRadius: 7, marginRight: 10}}>
          <Image
            source={{ uri: image }}
            style={{ flex: 1, height: undefined, width: undefined, borderRadius: 7 }}
          />
          <Text numberOfLines={2} style={{ marginTop: 10, fontSize: 20 }}>{title}</Text>
        </View>
      </TouchableOpacity>
  );
}

export default FeatureNews;