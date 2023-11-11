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
          onPress={() => navigation.navigate('RankingDetail', { id: 2 })}
        >
          <TopThreeCard
            image={require('../../../../assets/img/jake.jpeg')}
            position='2'
            name='Jake Gerstone'
            collegeName='Witherbloom'
            size={100}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('RankingDetail', { id: 1 })}
        >
          <TopThreeCard
            image={require('../../../../assets/img/felisa.jpeg')}
            position='1'
            name='Felisa Fang'
            collegeName='Silverquill'
            size={120}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('RankingDetail', { id: 3 })}
        >
          <TopThreeCard
            image={require('../../../../assets/img/luna_mox.jpeg')}
            position='3'
            name='Luna Mox'
            collegeName='Quandrix'
            size={90}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default TopThree;