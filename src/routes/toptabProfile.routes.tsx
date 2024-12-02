import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, ScrollView } from 'react-native';
import ProfileCuitter from '../pages/Profile/ProfileAmy/ProfileCuitter';
import ProfileStrixgan from '../pages/Profile/ProfileAmy/ProfileStrixgan';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './stack.routes';
import ProfileCuitterAmy from '../pages/Profile/ProfileAmy/ProfileCuitter';
import ProfileStrixganAmy from '../pages/Profile/ProfileAmy/ProfileStrixgan';
import ProfileCuitterNeri from '../pages/Profile/ProfileNerina/ProfileCuitter';
import ProfileStrixganNeri from '../pages/Profile/ProfileNerina/ProfileStrixgan';
import ProfileInfoAmy from '../pages/Profile/ProfileAmy/ProfileInfo';
import ProfileInfoNeri from '../pages/Profile/ProfileNerina/ProfileInfo';
import ProfileCuitterEli from '../pages/Profile/ProfileEli/ProfileCuitter';
import ProfileStrixganEli from '../pages/Profile/ProfileEli/ProfileStrixgan';
import ProfileInfoEli from '../pages/Profile/ProfileEli/ProfileInfo';

const Tab = createMaterialTopTabNavigator();

interface RankingDetailProps extends NativeStackScreenProps<RootStackParamList, 'Profile'> { }

export function MyTabsProfile({ route }: RankingDetailProps) {
  const { id } = route.params;

  const renderHeaderContent = () => {
    switch (id) {
      case 1:
        return <ProfileInfoAmy />;
      case 2:
        return <ProfileInfoNeri />;
      case 3:
        return <ProfileInfoEli />;
      default:
        return null; // Optional: Return a default fallback component
    }
  };

  const renderTabScreens = () => {
    switch (id) {
      case 1:
        return (
          <>
            <Tab.Screen name="Cuites" component={ProfileCuitterAmy} />
            <Tab.Screen name="Strixgan" component={ProfileStrixganAmy} />
          </>
        );
      case 2:
        return (
          <>
            <Tab.Screen name="Cuites" component={ProfileCuitterNeri} />
            <Tab.Screen name="Strixgan" component={ProfileStrixganNeri} />
          </>
        );
      case 3:
        return (
          <>
            <Tab.Screen name="Cuites" component={ProfileCuitterEli} />
            <Tab.Screen name="Strixgan" component={ProfileStrixganEli} />
          </>
        );
      // Add more cases if needed
      default:
        return null;
    }
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
