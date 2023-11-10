import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabRoutes from './tab.routes';

import NewsDetail from './../pages/NewsDetail/index';

export type RootStackParamList = {
  Home: {};
  NewsDetail: { id: number };
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
    </Stack.Navigator>
  );
}

export default StackRoutes;