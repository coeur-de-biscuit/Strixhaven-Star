import React from 'react';
import { View, Image, Text } from 'react-native';
import TopThreeCard from '../TopThreeCard';

const TopThree = () => {
  return (
    <View style={{   }}>
      <View style={{ flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 20 }}>
        <TopThreeCard
          image={require('../../../../assets/img/kevin.jpeg')}
          position='2'
          name='Kevin'
          collegeName='Witherbloom'
          size={110}
        />
        <TopThreeCard
          image={require('../../../../assets/img/jane.png')}
          position='1'
          name='Jane Moriarty'
          collegeName='Lorehold'
          size={130}
        />

        <TopThreeCard
          image={require('../../../../assets/img/ruhini.png')}
          position='3'
          name='Ruhini'
          collegeName='Prismari'
          size={100}
        />
      </View>
    </View>
  );
}

export default TopThree;