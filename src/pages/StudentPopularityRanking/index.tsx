import React from 'react';
import { Text, View, useWindowDimensions, Image, ScrollView } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import TopThree from './Components/TopThree';
import TopRest from './Components/TopRest';


const StudentPopularityRanking: React.FC = () => {

  return (
    <ScrollView>
      <View> 
        <TopThree />
        <TopRest />
      </View>
    </ScrollView>
  );
}

export default StudentPopularityRanking;