import React from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import Badge from '../../../../components/Badge';

const dimensions = Dimensions.get('window');

interface NewsProps {
  image: string;
  title: string;
  readTime: string;
  writter: string;
  badgeTitle: string;
  colorsTitle: string;
  onPress: () => void;
}

const NewsSnippet = ({ badgeTitle, colorsTitle, image, readTime, title, writter, onPress }: NewsProps) => {
  return (
    <TouchableOpacity style={{marginVertical: 10}} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: 100, height: 100, borderRadius: 7 }}>
          <Image
            source={{ uri: image }}
            style={{ flex: 1, width: undefined, height: undefined, borderRadius: 7 }}
          />
        </View>
        <View style={{ width: dimensions.width * 0.6, marginLeft: 20, justifyContent: 'space-between', marginVertical: 10 }}>
          <Text numberOfLines={2} style={{  fontSize: 18, flexShrink: 1 }}>{title}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text>
              <Text>{readTime}</Text>
              <Text> - {writter}</Text>
            </Text>
            <Badge 
              title={badgeTitle}
              color={colorsTitle}
            />
          </View>
        </View>

      </View>
    </TouchableOpacity>
  );
}

export default NewsSnippet;