import React from 'react';
import { Text, View, Image } from 'react-native';
import TopRestCard from '../TopRestCard';
import { StarCombatStudents } from '../../Data/StarStudents';

// import { Container } from './styles';

const TopRest = () => {
  return (
    <View style={{ marginTop: 20 }}>
      {
        StarCombatStudents.filter(cu => cu.topThree === false).map(item => {
          return (
            <TopRestCard
              college={item.college}
              isDown={item.isDown}
              isUp={item.isUp}
              name={item.name}
              position={item.id}
              image={item.image}
            />
          )
        })
      }

    </View>
  );
}

export default TopRest;