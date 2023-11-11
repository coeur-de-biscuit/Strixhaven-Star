import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import TopRestCard from '../TopRestCard';
import { StarStudents } from '../../Data/StarStudents';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../routes/stack.routes';

interface Props extends NativeStackScreenProps<RootStackParamList, 'RankingDetail'> {

}

const TopRest = ({ route }: Props) => {
  var navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  return (
    <View style={{ marginTop: 20 }}>
      {
        StarStudents.filter(cu => cu.topThree === false).map(item => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('RankingDetailPopularity', { id: item.id })}
            >
              <TopRestCard
                college={item.college}
                isDown={item.isDown}
                isUp={item.isUp}
                name={item.name}
                position={item.id}
                image={item.image}
              />
            </TouchableOpacity>
          )
        })
      }

    </View>
  );
}

export default TopRest;