import React, { useContext } from 'react';
import { Button, ScrollView, View } from 'react-native';
import { PicturePost } from './components/PicturePost';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/stack.routes';
import { FIREBASE_AUTH } from '../../../FirebaseConfig';
import { AuthContext } from '../../contexts/Auth/AuthContext';

interface Props extends NativeStackScreenProps<RootStackParamList, 'Home'> {

}

const HomeScreen = ({ route }: Props) => {
  const user = useContext(AuthContext);
  console.log(user?.uid)
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* <Button 
        onPress={() => FIREBASE_AUTH.signOut()}
        title='adasd'
      /> */}
      <View style={{ margin: 20 }}>
        <PicturePost.Root>
          <PicturePost.PostHeader
            user_thumb='https://i.pinimg.com/736x/59/c7/a7/59c7a7359c798839735a458aa5f0b5c2.jpg'
            user_name='Strixhaven Ball'
            location='Strixhaven'
          />
          <PicturePost.PostDescription
            user_name='strix_bola'
            description={`C'MON KIDS. `}
          />
          <PicturePost.PostContent
            post_image='https://th.bing.com/th/id/OIG.W2yTgqvao7ifWEJwrL0q?pid=ImgGn'
          />
        </PicturePost.Root>
        <PicturePost.Root>
          <PicturePost.PostHeader
            user_thumb='https://i.pinimg.com/736x/59/c7/a7/59c7a7359c798839735a458aa5f0b5c2.jpg'
            user_name='Strixhaven Ball'
            location='Strixhaven'
          />
          <PicturePost.PostDescription
            user_name='strix_bola'
            description={`Apresentação da banda nova, muito foda. Muito gostosas tbm`}
          />
          <PicturePost.PostContent
            post_image='https://raw.githubusercontent.com/Salt-N-Pepa/Pyceptron/main/7963a5b3-7de7-499d-8c5e-86eead2da300.jpg'
          />
        </PicturePost.Root>
        <PicturePost.Root>
          <PicturePost.PostHeader
            user_thumb='https://i.pinimg.com/736x/59/c7/a7/59c7a7359c798839735a458aa5f0b5c2.jpg'
            user_name='Strixhaven Ball'
            location='Strixhaven'
          />
          <PicturePost.PostDescription
            user_name='strix_bola'
            description={`Fiquei de bauduco`}
          />
          <PicturePost.PostContent
            post_image='https://th.bing.com/th/id/OIG.kHLpX43FAATL5YAVJc.O?pid=ImgGn'
          />
        </PicturePost.Root>
        <PicturePost.Root>
          <PicturePost.PostHeader
            user_thumb='https://i.pinimg.com/736x/59/c7/a7/59c7a7359c798839735a458aa5f0b5c2.jpg'
            user_name='Strixhaven Ball'
            location='Strixhaven'
          />
          <PicturePost.PostDescription
            user_name='strix_bola'
            description={`Best teacher sim ou com certeza?`}
          />
          <PicturePost.PostContent
            post_image='https://th.bing.com/th/id/OIG.FA11fEI92EqMTOAGwhj0?pid=ImgGn'
          />
        </PicturePost.Root>
        <PicturePost.Root>
          <PicturePost.PostHeader
            user_thumb='https://i.pinimg.com/736x/59/c7/a7/59c7a7359c798839735a458aa5f0b5c2.jpg'
            user_name='Strixhaven Ball'
            location='Strixhaven'
          />
          <PicturePost.PostDescription
            user_name='strix_bola'
            description={`Mas não tamo ficando não, confia...`}
          />
          <PicturePost.PostContent
            post_image='https://th.bing.com/th/id/OIG.40NoyIifZ0QHpW0lAP6P?pid=ImgGn'
          />
        </PicturePost.Root>
        <PicturePost.Root>
          <PicturePost.PostHeader
            user_thumb='https://i.pinimg.com/736x/59/c7/a7/59c7a7359c798839735a458aa5f0b5c2.jpg'
            user_name='Strixhaven Ball'
            location='Strixhaven'
          />
          <PicturePost.PostDescription
            user_name='strix_bola'
            description={`Até a Jane tava lá`}
          />
          <PicturePost.PostContent
            post_image='https://th.bing.com/th/id/OIG.FQ9qLcVzy3YT6neQvHzS?pid=ImgGn'
          />
        </PicturePost.Root>
        <PicturePost.Root>
          <PicturePost.PostHeader
            user_thumb='https://i.pinimg.com/736x/59/c7/a7/59c7a7359c798839735a458aa5f0b5c2.jpg'
            user_name='Strixhaven Ball'
            location='Strixhaven'
          />
          <PicturePost.PostDescription
            user_name='strix_bola'
            description={`É seus lixo, se ele consegue vcs também`}
          />
          <PicturePost.PostContent
            post_image='https://th.bing.com/th/id/OIG.kQANmLNzStpIvZsWD1s0?pid=ImgGn'
          />
        </PicturePost.Root>
        <PicturePost.Root>
          <PicturePost.PostHeader
            user_thumb='https://i.pinimg.com/736x/59/c7/a7/59c7a7359c798839735a458aa5f0b5c2.jpg'
            user_name='Strixhaven Ball'
            location='Strixhaven'
          />
          <PicturePost.PostDescription
            user_name='strix_bola'
            description={`Muito foda Helsinha, vlw pelo gelinho`}
          />
          <PicturePost.PostContent
            post_image='https://th.bing.com/th/id/OIG.NXCFv7F.EKBQUos0tyRl?pid=ImgGn'
          />
        </PicturePost.Root>
        <PicturePost.Root>
          <PicturePost.PostHeader
            user_thumb='https://i.pinimg.com/736x/59/c7/a7/59c7a7359c798839735a458aa5f0b5c2.jpg'
            user_name='Strixhaven Ball'
            location='Strixhaven'
          />
          <PicturePost.PostDescription
            user_name='strix_bola'
            description={`Rapaziada rolê hj a noite no pátio do biblioplex, vamo beber, patinar no gelo e ouvir a Sousie cantando\n\nQualquer chato está banido, inclusive temos permissão da Tia Onyx. Pau no seu cu Hermione.`}
          />
          <PicturePost.PostContent
            post_image='https://th.bing.com/th/id/OIG.cVxPb0tOKtloPV7ebC3I?pid=ImgGn'
          />
        </PicturePost.Root>
        <PicturePost.Root>
          <PicturePost.PostHeader
            user_thumb='https://i.pinimg.com/736x/59/c7/a7/59c7a7359c798839735a458aa5f0b5c2.jpg'
            user_name='Strixhaven Ball'
            location='Strixhaven'
          />
          <PicturePost.PostDescription
            user_name='strix_bola'
            description={`Casalzões da porra: Era dentro\nTamako e Killian`}
          />
          <PicturePost.PostContent
            post_image='https://th.bing.com/th/id/OIG.8kjSAg95WFCsWy0cTksV?pid=ImgGn'
          />
        </PicturePost.Root>
        <PicturePost.Root>
          <PicturePost.PostHeader
            user_thumb='https://i.pinimg.com/564x/f9/c4/3d/f9c43d44d6c29f960ef13a8a01c021b3.jpg'
            user_name='Strixhaven Show Band Association'
            location='Strixhaven'
          />
          <PicturePost.PostDescription
            user_name='strixhaven_music'
            description='Bem vinda a banda Serana'
          />
          <PicturePost.PostContent
            post_image='https://th.bing.com/th/id/OIG.8TnA6ZuU10hXPLTQ60pt?pid=ImgGn'
          />

        </PicturePost.Root>
        <PicturePost.Root>
          <PicturePost.PostHeader
            user_thumb='https://i.pinimg.com/564x/f9/c4/3d/f9c43d44d6c29f960ef13a8a01c021b3.jpg'
            user_name='Strixhaven Show Band Association'
            location='Strixhaven'
          />
          <PicturePost.PostDescription
            user_name='strixhaven_music'
            description='Bem vinda a banda Katherine'
          />
          <PicturePost.PostContent
            post_image='https://th.bing.com/th/id/OIG.gjOtnl_Ir6nPMuA.vukr?w=1024&h=1024&rs=1&pid=ImgDetMain'
          />

        </PicturePost.Root>
        <PicturePost.Root>
          <PicturePost.PostHeader
            user_thumb='https://i.pinimg.com/564x/f9/c4/3d/f9c43d44d6c29f960ef13a8a01c021b3.jpg'
            user_name='Strixhaven Show Band Association'
            location='Strixhaven'
          />
          <PicturePost.PostDescription
            user_name='strixhaven_music'
            description='Bem vinda a banda Rubina Larkingdale'
          />
          <PicturePost.PostContent
            post_image='https://th.bing.com/th/id/OIG.Jqw0VEEaLMyi9qeQQru6?pid=ImgGn'
          />

        </PicturePost.Root>
        <PicturePost.Root>
          <PicturePost.PostHeader
            user_thumb='https://i.pinimg.com/736x/59/c7/a7/59c7a7359c798839735a458aa5f0b5c2.jpg'
            user_name='Strixhaven Ball'
            location='Strixhaven'
          />
          <PicturePost.PostDescription
            user_name='strix_bola'
            description={`Casalzões da porra: Quem come quem?\nSerana e Steve`}
          />
          <PicturePost.PostContent
            post_image='https://lh3.googleusercontent.com/pw/ADCreHdAUkXkw5rYeE3-EiaBq7N6nT-NbbJWc4ilgpFeGnhkAT1TY3Cor9xJ90cJ4-xqo4-bd1dul2ImQlGtNelYev1IBDiXvWVjAriUS6QnDDCSF1HoUuLkrolyLIhLhf65Fhjr4_LfHy9PDuyigt0HImer=w620-h620-s-no-gm?authuser=0'
          />
        </PicturePost.Root>
        <PicturePost.Root>
          <PicturePost.PostHeader
            user_thumb='https://i.pinimg.com/736x/59/c7/a7/59c7a7359c798839735a458aa5f0b5c2.jpg'
            user_name='Strixhaven Ball'
            location='Strixhaven'
          />
          <PicturePost.PostDescription
            user_name='strix_bola'
            description={`Casalzões da porra: Dava pros dois\nCharlie e Harry`}
          />
          <PicturePost.PostContent
            post_image='https://th.bing.com/th/id/OIG.9GN42WGz0tk2T4CtkmuW?pid=ImgGn'
          />
        </PicturePost.Root>
        <PicturePost.Root>
          <PicturePost.PostHeader
            user_thumb='https://i.pinimg.com/736x/59/c7/a7/59c7a7359c798839735a458aa5f0b5c2.jpg'
            user_name='Strixhaven Ball'
            location='Strixhaven'
          />
          <PicturePost.PostDescription
            user_name='strix_bola'
            description={`Casalzões da porra: Comia logo os dois\nAya e Victor`}
          />
          <PicturePost.PostContent
            post_image='https://th.bing.com/th/id/OIG.3uCmzYiYxhVm3_V28M4F?pid=ImgGn&w=1024&h=1024&rs=1'
          />
        </PicturePost.Root>
        <PicturePost.Root>
          <PicturePost.PostHeader
            user_thumb='https://i.pinimg.com/736x/59/c7/a7/59c7a7359c798839735a458aa5f0b5c2.jpg'
            user_name='Strixhaven Ball'
            location='Strixhaven'
          />
          <PicturePost.PostDescription
            user_name='strix_bola'
            description='Será que a professora vende do purple e do green?'
          />
          <PicturePost.PostContent
            post_image='https://th.bing.com/th/id/OIG.hzWjadj8WDiBI.tJcS7o?pid=ImgGn&w=1024&h=1024&rs=1'
          />
        </PicturePost.Root>
        <PicturePost.Root>
          <PicturePost.PostHeader
            user_thumb='https://i.pinimg.com/736x/59/c7/a7/59c7a7359c798839735a458aa5f0b5c2.jpg'
            user_name='Strixhaven Ball'
            location='Strixhaven'
          />
          <PicturePost.PostDescription
            user_name='strix_bola'
            description='Apreciando a diva que calou a boca da fofoqueira.'
            mentions='#tomanocuminalee'
          />
          <PicturePost.PostContent
            post_image='https://th.bing.com/th/id/OIG.HouiOxxLYPf9GPDXpG26?pid=ImgGn&w=1024&h=1024&rs=1s'
          />
        </PicturePost.Root>
        <PicturePost.Root>
          <PicturePost.PostHeader
            user_thumb='https://i.pinimg.com/736x/59/c7/a7/59c7a7359c798839735a458aa5f0b5c2.jpg'
            user_name='Strixhaven Ball'
            location='Strixhaven'
          />
          <PicturePost.PostDescription
            user_name='strix_bola'
            description='Aposto 50 num sexo depois do duelo.'
          />
          <PicturePost.PostContent
            post_image='https://th.bing.com/th/id/OIG.mIAsBCbM4kV7bs1W5D1K?pid=ImgGn'
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

        <PicturePost.Root>
          <PicturePost.PostHeader
            user_thumb='https://th.bing.com/th/id/OIG.aIs4dK.pNM1A3A5_PO23?pid=ImgGn'
            user_name='Clube de Artes Plasticas'
            location='Clube de Artes Plasticas, Strixhaven'
          />
          <PicturePost.PostDescription
            user_name='coeur_en_plastique'
            description='A única oportunidade de fotografá-la é quando está super concentrada em seu trabalho.'
            mentions='@morimori'
          />
          <PicturePost.PostContent
            post_image='https://th.bing.com/th/id/OIG.cJ.VWKG5HE74Tyb8uqRb?pid=ImgGn'
          />

        </PicturePost.Root>


        <PicturePost.Root>
          <PicturePost.PostHeader
            user_thumb='https://i.pinimg.com/564x/f9/c4/3d/f9c43d44d6c29f960ef13a8a01c021b3.jpg'
            user_name='Strixhaven Show Band Association'
            location='Strixhaven'
          />
          <PicturePost.PostDescription
            user_name='strixhaven_music'
            description='A banda The Cure Wounds foi sucesso no festival de artes promovido pela Organização Multiversal pela Cultura. Os jovens cativaram com seu som jovem e moderno e representaram muito bem Strixhaven'
          />
          <PicturePost.PostContent
            post_image='https://th.bing.com/th/id/OIG.Zisl9xrJ8gJ0TtJ6eM03?pid=ImgGn'
          />

        </PicturePost.Root>

      </View>
    </ScrollView>
  );
}

export default HomeScreen;