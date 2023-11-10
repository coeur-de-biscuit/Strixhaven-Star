import React from 'react';
import { ScrollView, View } from 'react-native';
import { PicturePost } from './components/PicturePost';

const HomeScreen: React.FC = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ margin: 20 }}>
        <PicturePost.Root>
          <PicturePost.PostHeader
            user_thumb='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtwP0_VKniUtpvU9GbDqLqtQRZA-enGXX5HsQfjdgH-v2bHYBiF-nf_xpgsWz0PZwYiLI&usqp=CAU'
            user_name='Strixhaven Dragonchess Club'
            location='Strixhaven'
          />
          <PicturePost.PostContent
            post_image='https://th.bing.com/th/id/OIG.3GXsBTpSTw.OluBgugDD?pid=ImgGn'
          />
          <PicturePost.PostDescription
            user_name='strix_granmaster'
            description='O time clube de Xadrez de Strixhaven vai realizar o seu primeiro encontro nessa terça-feira. Os diretores convidam a todos para participarem'
          />
        </PicturePost.Root>

        <PicturePost.Root>
          <PicturePost.PostHeader
            user_thumb='https://th.bing.com/th/id/OIG.aIs4dK.pNM1A3A5_PO23?pid=ImgGn'
            user_name='Clube de Artes Plasticas'
            location='Clube de Artes Plasticas, Strixhaven'
          />
          <PicturePost.PostContent
            post_image='https://th.bing.com/th/id/OIG.cJ.VWKG5HE74Tyb8uqRb?pid=ImgGn'
          />
          <PicturePost.PostDescription
            user_name='coeur_en_plastique'
            description='A única oportunidade de fotografá-la é quando está super concentrada em seu trabalho.'
            mentions='@morimori'
          />
        </PicturePost.Root>


        <PicturePost.Root>
          <PicturePost.PostHeader
            user_thumb='https://i.pinimg.com/564x/f9/c4/3d/f9c43d44d6c29f960ef13a8a01c021b3.jpg'
            user_name='Strixhaven Show Band Association'
            location='Strixhaven'
          />
          <PicturePost.PostContent
            post_image='https://th.bing.com/th/id/OIG.Zisl9xrJ8gJ0TtJ6eM03?pid=ImgGn'
          />
          <PicturePost.PostDescription
            user_name='strixhaven_music'
            description='A banda The Cure Wounds foi sucesso no festival de artes promovido pela Organização Multiversal pela Cultura. Os jovens cativaram com seu som jovem e moderno e representaram muito bem Strixhaven'
          />
        </PicturePost.Root>

      </View>
    </ScrollView>
  );
}

export default HomeScreen;