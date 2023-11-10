import React from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import NewsSnippet from './components/NewsSnippet';
import FeatureNews from './components/FeatureNews';
import { StrixHavenNews } from './Data/news';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../routes/stack.routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const StrixhavenStar: React.FC = ({}) => {
  var navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ margin: 40 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 30 }}>Mais vistas</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {StrixHavenNews.filter(cu => cu.tipo == 1).map(item => {
          return(
            <FeatureNews 
              key={item.id}
              image={item.image}
              title={item.title}
              onPress={() => navigation.navigate('NewsDetail', {id: item.id})}
            />
          )
        })}
      </ScrollView>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginVertical: 30 }}>Ultimas noticias</Text>
      {
        StrixHavenNews.filter(cu => cu.tipo == 2).map(item => {
          return (
            <NewsSnippet 
              badgeTitle={item.badgeTitle}
              colorsTitle={item.badgeColor}
              image={item.image}
              readTime={item.readingTime}
              title={item.title}
              writter={item.writter}
              onPress={() => navigation.navigate('NewsDetail', {id: item.id})}
            />
          )
        })
      }
      

    </ScrollView>
  );
}

export default StrixhavenStar;