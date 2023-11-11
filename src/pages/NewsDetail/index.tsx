import React from 'react';
import { Dimensions, Image, ScrollView, Text, View } from 'react-native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/stack.routes';
import Badge from '../../components/Badge';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { StrixHavenNews } from '../StrixhavenStar/Data/news';

const dimensions = Dimensions.get('window');

interface Props extends NativeStackScreenProps<RootStackParamList, 'NewsDetail'> {

}

const NewsDetail = ({ route }: Props) => {

  var navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()


  return (
    <ScrollView style={{ margin: 20 }} showsVerticalScrollIndicator={false}>
      {StrixHavenNews.filter((news) => news.id == route.params.id).map(item => {
        return (
          <View>
            <Ionicons
              name='arrow-back'
              size={24}
              onPress={() => navigation.goBack()}
            />
            <View style={{ marginTop: 20 }}>
              <Badge
                title={item.badgeTitle}
                color={item.badgeColor}
              />
              <Text style={{ fontSize: 24, color: '#706968', fontWeight: 'bold', marginTop: 20 }}>{item.title}</Text>
              <Text style={{ marginVertical: 10, fontSize: 18, color: '#979797', alignSelf: 'flex-end' }}>{item.writter}</Text>
              <View style={{ width: '100%', height: dimensions.width * 0.9, borderRadius: 7 }}>
                <Image
                  source={{ uri: item.image }}
                  style={{ flex: 1, height: undefined, width: undefined, borderRadius: 7 }}
                />
              </View>
              <Text style={{ fontSize: 18, lineHeight: 30, marginTop: 20 }}>
                {item.content}
              </Text>
            </View>
          </View>
        )
      })}

    </ScrollView>
  );
}

export default NewsDetail;