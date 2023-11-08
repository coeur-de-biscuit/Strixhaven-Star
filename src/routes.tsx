import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from '@expo/vector-icons/Feather';

import HomeScreen from './pages/HomeScreen';
import StrixhavenStar from './pages/StrixhavenStar';
import StudentRanking from './pages/StudentRanking';
import { NavigationContainer } from '@react-navigation/native';

const { Navigator, Screen } = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false
        }}
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
        <Screen 
          name="StudentRanking" 
          component={StudentRanking}
          options={{
            tabBarIcon: ({ size, color }) => <Feather name='trending-up' size={20} color={color} />
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;