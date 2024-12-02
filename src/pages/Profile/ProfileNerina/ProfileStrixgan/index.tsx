import React from 'react';
import { View } from 'react-native';
import { PicturePost } from '../../../HomeScreen/components/PicturePost';

// import { Container } from './styles';

const ProfileStrixganNeri: React.FC = () => {
  return (
    <View style={{ padding: 20 }}>
      <PicturePost.Root>
        <PicturePost.PostHeader
          user_thumb='https://th.bing.com/th/id/OIG3.sxvvpNs.Hr5bpd8BzlHZ?pid=ImgGn'
          user_name='Sprite'
          location='Strixhaven'
        />
        <PicturePost.PostDescription
          user_name='nerinathedark'
          description='Eu e minha plantinha'
        />
        <PicturePost.PostContent
          post_image='https://raw.githubusercontent.com/coeur-de-biscuit/Pyceptron/refs/heads/main/Group%2013.png'
        />
      </PicturePost.Root>
    </View>
  );
}

export default ProfileStrixganNeri;