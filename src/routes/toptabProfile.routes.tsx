import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './stack.routes';
import Profile from '../pages/Profile';
import ProfileCuitter from '../pages/Profile/ProfileCuitter';
import ProfileStrixgan from '../pages/Profile/ProfileStrixgam';

const Tab = createMaterialTopTabNavigator();

interface RankingDetailProps extends NativeStackScreenProps<RootStackParamList, 'Profile'> { }

export function MyTabsProfile({ route }: RankingDetailProps) {

  const renderHeaderContent = () => {
    return <Profile />;
  };

  const renderTabScreens = () => {
    return (
      <>
        <Tab.Screen name="Cuites" component={ProfileCuitter} />
        <Tab.Screen name="Strixgan" component={ProfileStrixgan} />
      </>
    );
  };

  return (
    <ScrollView>
      <View style={{ paddingTop: 30 }}>{renderHeaderContent()}</View>

      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: '#F2F2F2' },
        }}
      >
        {renderTabScreens()}
      </Tab.Navigator>
    </ScrollView>
  );
}
