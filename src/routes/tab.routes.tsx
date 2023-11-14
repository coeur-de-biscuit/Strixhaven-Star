import React from 'react';
import Feather from '@expo/vector-icons/Feather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../pages/HomeScreen';
import StrixhavenStar from '../pages/StrixhavenStar';
import Profile from '../pages/Profile';
import { MyTabs } from './toptab.routes';
import RankingDetail from '../pages/RankingDetail';
import CreatePost from '../pages/CreatePost';

const { Navigator, Screen } = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      backBehavior='history'
    >

      <Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, color }) => <Feather name='home' size={20} color={color} />
        }}
      />

      <Screen
        name="StrixhavenStar"
        component={StrixhavenStar}
        options={{
          tabBarIcon: ({ size, color }) => <Feather name='bookmark' size={20} color={color} />
        }}
      />
      {/* <Screen
        name="CreatePost"
        component={CreatePost}
        options={{
          tabBarIcon: ({ size, color }) => <Feather name='plus-circle' size={30} color={color} />
        }}
      /> */}
      <Screen
        name="StudentRanking"
        component={MyTabs}
        options={{
          tabBarIcon: ({ size, color }) => <Feather name='trending-up' size={20} color={color} />
        }}
      />
      {/* <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => <Feather name='user' size={20} color={color} />
        }}
      />
       */}
    </Navigator>
  );
}

export default TabRoutes;