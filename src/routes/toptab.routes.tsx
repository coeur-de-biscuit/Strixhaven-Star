import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HeaderRanking from '../components/HeaderRanking';
import StudentPopularityRanking from '../pages/StudentPopularityRanking';
import StudentRanking from '../pages/StudentCombatRanking';

const Tab = createMaterialTopTabNavigator();

export function MyTabs() {
  return (
    <>
      <HeaderRanking />
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: '#F2F2F2' },
        }}
      >
        <Tab.Screen name="Popularidade" component={StudentPopularityRanking} />
        <Tab.Screen name="Combate" component={StudentRanking} />
      </Tab.Navigator>
    </>
  );
}