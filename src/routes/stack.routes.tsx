import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import TabRoutes from './tab.routes';

import NewsDetail from './../pages/NewsDetail/index';
import RankingDetail from '../pages/RankingDetail';
import RankingDetailPopularity from '../pages/RankingDetailPopularity';
import Authentication from '../pages/Authentication';
import { MyTabsProfile } from './toptabProfile.routes';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';
import CreateProfile from '../pages/Profile/CreateProfile';
import EditProfile from '../pages/Profile/CreateProfile';

export type RootStackParamList = {
  Authentication: {};
  Home: {};
  NewsDetail: { id: number };
  RankingDetail: { id: number };
  RankingDetailPopularity: { id: number };
  Profile: { id: number };
  EditProfile: {};
};

const Stack = createNativeStackNavigator<RootStackParamList>();


const StackRoutes = () => {
  const { token } = useContext(AuthContext)!;
  var navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  useEffect(() => {
    if (token) {
      navigation.reset({ index: 0, routes: [{ name: 'Home' }] });
    } else {
      navigation.reset({ index: 0, routes: [{ name: 'Authentication' }] });
    }
  }, [token]);

  return (
    <Stack.Navigator
      initialRouteName="Authentication"
      screenOptions={{
        headerShown: false,
      }}>

      <Stack.Screen name="Home" component={TabRoutes} />

      <Stack.Screen name="Authentication" component={Authentication} />

      <Stack.Screen name="NewsDetail" component={NewsDetail} />
      <Stack.Screen name="RankingDetail" component={RankingDetail} />
      <Stack.Screen name="RankingDetailPopularity" component={RankingDetailPopularity} />
      <Stack.Screen name="Profile" component={MyTabsProfile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
}

export default StackRoutes;