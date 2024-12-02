import React from 'react';
import { ScrollView, View, Image, Dimensions, Text, ImageURISource } from 'react-native';
import Badge from '../../components/Badge';

import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/stack.routes';
import { StarPopularityStudentsDetail } from './Data/StarStudentsDetail';

interface RankingDetailProps extends NativeStackScreenProps<RootStackParamList, 'RankingDetailPopularity'> {

}

const RankingDetailPopularity = ({ route }: RankingDetailProps) => {

  var navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  var news = StarPopularityStudentsDetail.filter((news) => news.id == route.params.id)

  const dimensions = Dimensions.get('window');

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Ionicons
          name='arrow-back-outline'
          size={24}
          onPress={() => navigation.goBack()}
          color={'black'}
          style={{ margin: 30 }}
        />
        {StarPopularityStudentsDetail.filter((news) => news.id == route.params.id).map(item => {
          return (
            <>
              <View style={{ marginHorizontal: 30 }}>
                <View style={{ height: dimensions.width, borderRadius: 40 }}>
                  <Image
                    source={item.image}
                    style={{ flex: 1, width: undefined, height: undefined, borderRadius: 40 }}
                  />
                </View>
              </View>
              <View style={{ marginTop: 25, marginLeft: 30 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 22, color: '#352b2b' }}>{item.nome}</Text>
                <Text style={{ fontSize: 18, marginBottom: 20 }}>{item.colegio}</Text>
                <View style={{ flexDirection: 'row' }}>
                  {item.badges.map(i => {
                    return (
                      <Badge
                        title={i.title}
                        color={i.color}
                        style={{ marginRight: 15 }}
                      />
                    )
                  })}
                </View>

              </View>
              <View style={{ margin: 30 }}>
                <Text style={{ fontSize: 20, color: '#504b4b' }}>
                  {item.content}
                </Text>
              </View>
            </>
          )
        })}

      </ScrollView>
    </>
  );
}

export default RankingDetailPopularity;