import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabRoutes from './tab.routes';

import NewsDetail from './../pages/NewsDetail/index';
import RankingDetail from '../pages/RankingDetail';
import RankingDetailPopularity from '../pages/RankingDetailPopularity';
import Authentication from '../pages/Authentication';
import { User, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { FIREBASE_AUTH } from '../../FirebaseConfig';

export type RootStackParamList = {
  Home: {};
  NewsDetail: { id: number };
  RankingDetail: { id: number };
  RankingDetailPopularity: { id: number };
  Authentication: {};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackRoutes = () => {
  const [user, setUser] = useState<User | null>(null)
  const [initializing, setInitializing] = useState(true)

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user', user);
      setUser(user);
      if(initializing) setInitializing(false)
    })
  }, [])

  if(initializing) return null;

  return (
    <Stack.Navigator
      initialRouteName="Authentication"
      screenOptions={{
        headerShown: false,
      }}>
      {/* {user ?
        <Stack.Screen name="Home" component={TabRoutes}/>
        :
        <Stack.Screen name="Authentication" component={Authentication} />
      } */}
      <Stack.Screen name="Home" component={TabRoutes}/>

      <Stack.Screen name="NewsDetail" component={NewsDetail} />
      <Stack.Screen name="RankingDetail" component={RankingDetail} />
      <Stack.Screen name="RankingDetailPopularity" component={RankingDetailPopularity} />
    </Stack.Navigator>
  );
}

export default StackRoutes;