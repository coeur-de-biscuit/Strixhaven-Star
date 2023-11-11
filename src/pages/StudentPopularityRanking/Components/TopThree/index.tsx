import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import TopThreeCard from '../TopThreeCard';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../routes/stack.routes';

const TopThree = () => {
  var navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  return (
    <View style={{}}>
      <View style={{ flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 20 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('RankingDetailPopularity', { id: 2 })}
        >
          <TopThreeCard
            image={require('../../../../assets/img/kevin.jpeg')}
            position='2'
            name='Kevin'
            collegeName='Witherbloom'
            size={100}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('RankingDetailPopularity', { id: 1 })}
        >
          <TopThreeCard
            image={require('../../../../assets/img/jane.png')}
            position='1'
            name='Jane Moriarty'
            collegeName='Lorehold'
            size={120}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('RankingDetailPopularity', { id: 3 })}
        >
          <TopThreeCard
            image={require('../../../../assets/img/ruhini.png')}
            position='3'
            name='Ruhini'
            collegeName='Prismari'
            size={90}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default TopThree;