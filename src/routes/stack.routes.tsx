import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabRoutes from './tab.routes';

import NewsDetail from './../pages/NewsDetail/index';
import RankingDetail from '../pages/RankingDetail';
import RankingDetailPopularity from '../pages/RankingDetailPopularity';

export type RootStackParamList = {
  Home: {};
  NewsDetail: { id: number };
  RankingDetail: { id: number };
  RankingDetailPopularity: { id: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackRoutes = () => {

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={TabRoutes} />
      <Stack.Screen name="NewsDetail" component={NewsDetail} />
      <Stack.Screen name="RankingDetail" component={RankingDetail} />
      <Stack.Screen name="RankingDetailPopularity" component={RankingDetailPopularity} />
    </Stack.Navigator>
  );
}

export default StackRoutes;