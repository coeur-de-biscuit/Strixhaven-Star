import React from 'react';
import { View, Image, Text } from 'react-native';
import TopThreeCard from '../TopThreeCard';

const TopThree = () => {
  return (
    <View style={{   }}>
      <View style={{ flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 20 }}>
        <TopThreeCard
          image={require('../../../../assets/img/jake.jpeg')}
          position='2'
          name='Jake Gerstone'
          collegeName='Witherbloom'
          size={110}
        />
        <TopThreeCard
          image={require('../../../../assets/img/felisa.jpeg')}
          position='1'
          name='Felisa Fang'
          collegeName='Silverquill'
          size={130}
        />

        <TopThreeCard
          image={require('../../../../assets/img/luna_mox.jpeg')}
          position='3'
          name='Luna Mox'
          collegeName='Quandrix'
          size={100}
        />
      </View>
    </View>
  );
}

export default TopThree;