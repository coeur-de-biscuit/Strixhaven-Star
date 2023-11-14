import React from 'react';
import { Dimensions, View, ScrollView } from 'react-native';
import ProfileInfo from './components/ProfileInfo';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/stack.routes';
import { PicturePost } from '../HomeScreen/components/PicturePost';

const dimensions = Dimensions.get('window');

// interface Props extends NativeStackScreenProps<RootStackParamList, 'Profile'> {
//   // other props ...
// }
const Profile = () => {
  return (
    <ScrollView style={{ height: dimensions.height }}>
      <View style={{ margin: 30 }}>
        <View>
          <ProfileInfo />
        </View>
      <PicturePost.Root>
          <PicturePost.PostHeader
            user_thumb='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtwP0_VKniUtpvU9GbDqLqtQRZA-enGXX5HsQfjdgH-v2bHYBiF-nf_xpgsWz0PZwYiLI&usqp=CAU'
            user_name='Strixhaven Dragonchess Club'
            location='Strixhaven'
          />
          <PicturePost.PostDescription
            user_name='strix_granmaster'
            description='O time clube de Xadrez de Strixhaven vai realizar o seu primeiro encontro nessa terça-feira. Os diretores convidam a todos para participarem'
          />
          <PicturePost.PostContent
            post_image='https://th.bing.com/th/id/OIG.3GXsBTpSTw.OluBgugDD?pid=ImgGn'
          />
        </PicturePost.Root>
      <PicturePost.Root>
          <PicturePost.PostHeader
            user_thumb='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtwP0_VKniUtpvU9GbDqLqtQRZA-enGXX5HsQfjdgH-v2bHYBiF-nf_xpgsWz0PZwYiLI&usqp=CAU'
            user_name='Strixhaven Dragonchess Club'
            location='Strixhaven'
          />
          <PicturePost.PostDescription
            user_name='strix_granmaster'
            description='O time clube de Xadrez de Strixhaven vai realizar o seu primeiro encontro nessa terça-feira. Os diretores convidam a todos para participarem'
          />
          <PicturePost.PostContent
            post_image='https://th.bing.com/th/id/OIG.3GXsBTpSTw.OluBgugDD?pid=ImgGn'
          />
        </PicturePost.Root>
      </View>
    </ScrollView>
  );
}

export default Profile;