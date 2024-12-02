import React from 'react';
import { Dimensions, ScrollView } from 'react-native';
import Tweet from './components/Tweet';
import Reply from './components/ReTweet';
import HorizontalDivider from '../../components/HorizontalDivider';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/stack.routes';

const dimensions = Dimensions.get('window');

const Cuitter = () => {
  var navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  return (
    <ScrollView style={{ height: dimensions.height, padding: 20 }}>
      <Tweet
        avatarImage='https://th.bing.com/th/id/OIG4.IsWScD1sm.iOFFfGTSen?pid=ImgGn'
        name='Rosebud'
        profileName='moonflower2'
        comments={10}
        likes={50}
        reTweets={4}
        time='4h'
        tweetImage='https://i.imgflip.com/4g9ih8.png'
        hasReply
        navigate={() => navigation.navigate('Profile', { id: 1 })}
      >
        <Reply
          avatarImage='https://th.bing.com/th/id/OIG3.TLmM..IrJ3kbxC820w2w?pid=ImgGn'
          name='Flor da Lua'
          profileName='moonflower'
          time='4h'
        >
          Hahahahahahahaha How The Fuck Is Cyber Bullying Real Hahahaha Dude Just Walk Away From The Screen Like Dude Close Your Eyes Haha
        </Reply>
      </Tweet>
      <HorizontalDivider />
      <Tweet
        avatarImage='https://th.bing.com/th/id/OIG3.TLmM..IrJ3kbxC820w2w?pid=ImgGn'
        comments={10}
        likes={100}
        reTweets={34}
        name='Flor da Lua'
        profileName='moonflower'
        time='1h'
        navigate={() => navigation.navigate('Profile', { id: 3 })}
      >
        Hahahahahahahaha How The Fuck Is Cyber Bullying Real Hahahaha Dude Just Walk Away From The Screen Like Dude Close Your Eyes Haha
      </Tweet>
      <HorizontalDivider />
      <Tweet
        avatarImage='https://th.bing.com/th/id/OIG2.FJM.ISY9RXUDeDVx8_EA?pid=ImgGn'
        name='Skin of a Killer'
        profileName='fang'
        comments={10}
        likes={100}
        reTweets={34}
        time='1h'
      >
        Vocês tentam, mas eu sou superior. Não se esqueçam disso.
      </Tweet>
      <HorizontalDivider />
      <Tweet
        avatarImage='https://th.bing.com/th/id/OIG.W2yTgqvao7ifWEJwrL0q?pid=ImgGn'
        comments={10}
        likes={50}
        reTweets={4}
        name='Siouxsie'
        profileName='cmonkids'
        time='1h'
        hasReply
      >
        Don t.

        Try to be calm and happy

        <Reply
          avatarImage='https://th.bing.com/th/id/OIG1.Ii8Az6EEdqjIORto5jBB?pid=ImgGn'
          name='Sharon'
          profileName='unseeliesharon'
          time='7h'
        >
          to com depressão
        </Reply>
      </Tweet>
      <HorizontalDivider />
      <Tweet
        avatarImage='https://th.bing.com/th/id/OIG1.Ii8Az6EEdqjIORto5jBB?pid=ImgGn'
        comments={10}
        likes={50}
        reTweets={4}
        name='Sharon'
        profileName='unseeliesharon'
        time='1h'
      >
        to com depressão
      </Tweet>
      <HorizontalDivider />
      <Tweet
        avatarImage='https://th.bing.com/th/id/OIG2.vmdO4q9w88iwTzSm0Z2Q?w=1024&h=1024&rs=1&pid=ImgDetMain'
        comments={10}
        likes={50}
        reTweets={4}
        name='Professora Onyx'
        profileName='onyx'
        time='1h'
        hasReply
      >
        👍👍
        <Reply
          avatarImage='https://i.redd.it/982tjlgagvdd1.jpeg'
          name='Fofocas Strixhaven'
          profileName='chupei'
          time='7h'
          tweetImage='https://github.com/coeur-de-biscuit/Pyceptron/blob/main/Frame%203.png?raw=true'
        >
          Aparentemnete Rubina Larkingale e Amelia Moonflower impressionaram a Professora Onyx hoje.
        </Reply>
      </Tweet>
      <HorizontalDivider />
      <Tweet
        avatarImage='https://i.redd.it/982tjlgagvdd1.jpeg'
        comments={10}
        likes={100}
        reTweets={34}
        name='Fofocas Strixhaven'
        profileName='chupei'
        time='1h'
        tweetImage='https://github.com/coeur-de-biscuit/Pyceptron/blob/main/Frame%203.png?raw=true'
      >
        Aparentemnete Rubina Larkingale e Amelia Moonflower impressionaram a Professora Onyx hoje.
      </Tweet>
      <HorizontalDivider />
      <Tweet
        avatarImage='https://img.notionusercontent.com/s3/prod-files-secure%2F70a10ea6-babb-4552-b958-f024450baba9%2Fac32ad41-03e2-4a2c-9efd-fe6ea984b9da%2FUntitled.png/size/w=2000?exp=1733009257&sig=eQ5XXiQHyPdOlBzB0vGG4IL6NtXkaUB795RRMP0NAUM'
        comments={10}
        likes={100}
        reTweets={34}
        name='Lari'
        profileName='larilari'
        time='1h'
      >
        Num vi a invasão 🤣🤣🤣
      </Tweet>
      <HorizontalDivider />
      <Tweet
        avatarImage='https://th.bing.com/th/id/OIG2.S2bpwlD7IUDKy6LbPJ8q?pid=ImgGn'
        comments={10}
        likes={50}
        reTweets={4}
        name='Estrela do Mar'
        profileName='magaseastar'
        time='1h'
        tweetImage='https://th.bing.com/th/id/OIG3.l2hEJcispO178hKbHmFb?pid=ImgGn'
      >
        O Gato não gosta muito de camera
      </Tweet>
      <HorizontalDivider />
      <Tweet
        avatarImage='https://th.bing.com/th/id/OIG3.blllEHA0LhHRFBNMfSNx?pid=ImgGn'
        comments={10}
        likes={50}
        reTweets={4}
        name='Rubi'
        profileName='rubina'
        time='1h'
      >
        Imaginava que a escola estaria apta a proteger seus alunos. 🙄🙄
      </Tweet>
      <HorizontalDivider />
      <Tweet
        avatarImage='https://i.pinimg.com/736x/16/07/54/1607544d838f182181d0c85ba35867e9.jpg'
        comments={10}
        likes={100}
        reTweets={34}
        name='Kevin'
        profileName='kevinofc'
        time='1h'
      >
        Essas porra de portal. Proibiram de andar de sk8 defora da escola. Maldito capitalismo.
      </Tweet>
      <HorizontalDivider />
      <Tweet
        avatarImage='https://th.bing.com/th/id/OIG3.TLmM..IrJ3kbxC820w2w?pid=ImgGn'
        comments={10}
        likes={100}
        reTweets={34}
        name='Flor da Lua'
        profileName='moonflower'
        time='1h'
        navigate={() => navigation.navigate('Profile', { id: 3 })}
      >
        Pena que ninguém morreu.
      </Tweet>
      <HorizontalDivider />
      <Tweet
        avatarImage='https://th.bing.com/th/id/OIG3.LuCz_FsiM5cB5BCwEdS.?pid=ImgGn'
        comments={10}
        likes={100}
        reTweets={34}
        name='Layla'
        repostName='Flor da Lua'
        profileName='your_angel'
        time='1h'
      >
        Não se preocupem mores enquanto eu estiver aqui a escola está protegida.
      </Tweet>
      <HorizontalDivider />
      <Tweet
        avatarImage='https://th.bing.com/th/id/OIG3.blllEHA0LhHRFBNMfSNx?pid=ImgGn'
        comments={10}
        likes={50}
        reTweets={4}
        name='Rubi'
        profileName='rubina'
        time='1h'
      >
        Não tem mistério: estuda e aprende. Difícil é ter paciência com quem reclama.
      </Tweet>
      <HorizontalDivider />
      <Tweet
        avatarImage='https://th.bing.com/th/id/OIG2.vmdO4q9w88iwTzSm0Z2Q?w=1024&h=1024&rs=1&pid=ImgDetMain'
        comments={10}
        likes={50}
        reTweets={4}
        name='Professora Onyx'
        profileName='onyx'
        time='1h'
        hasReply
      >
        👍👍
        <Reply
          avatarImage='https://th.bing.com/th/id/OIG3.KtBBf07lIq50z9XA_UzZ?pid=ImgGn'
          name='Sprite'
          profileName='nerinathedark'
          time='7h'
          tweetImage='https://raw.githubusercontent.com/coeur-de-biscuit/Pyceptron/refs/heads/main/Group%2012.png'
        >
          Eu no laguinho
        </Reply>
      </Tweet>
      <HorizontalDivider />
      <Tweet
        avatarImage='https://th.bing.com/th/id/OIG4.IsWScD1sm.iOFFfGTSen?pid=ImgGn'
        comments={10}
        likes={50}
        reTweets={4}
        name='Rosebud'
        profileName='moonflower2'
        time='1h'
        hasReply
      >
        Já peguei 😁😁
        <Reply
          avatarImage='https://th.bing.com/th/id/OIG3.KtBBf07lIq50z9XA_UzZ?pid=ImgGn'
          name='Sprite'
          profileName='nerinathedark'
          time='7h'
          tweetImage='https://raw.githubusercontent.com/coeur-de-biscuit/Pyceptron/refs/heads/main/Group%2012.png'
        >
          Eu no laguinho
        </Reply>
      </Tweet>
      <HorizontalDivider />

      <Tweet
        avatarImage='https://th.bing.com/th/id/OIG2.FJM.ISY9RXUDeDVx8_EA?pid=ImgGn'
        name='Skin of a Killer'
        profileName='fang'
        comments={10}
        likes={100}
        reTweets={34}
        time='1h'
        hasReply
      >
        QUERO MORDER ESSA FOFURA!!! 😋😍
        <Reply
          avatarImage='https://th.bing.com/th/id/OIG3.KtBBf07lIq50z9XA_UzZ?pid=ImgGn'
          name='Sprite'
          profileName='nerinathedark'
          time='7h'
          tweetImage='https://raw.githubusercontent.com/coeur-de-biscuit/Pyceptron/refs/heads/main/Group%2012.png'
        >
          Eu no laguinho
        </Reply>
      </Tweet>
      <HorizontalDivider />
      <Tweet
        avatarImage='https://th.bing.com/th/id/OIG2.S2bpwlD7IUDKy6LbPJ8q?pid=ImgGn'
        comments={10}
        likes={50}
        reTweets={4}
        name='Estrela do Mar'
        profileName='magaseastar'
        time='1h'
      >
        Eu tenho duas amigas agora 😁😁
      </Tweet>
      <HorizontalDivider />
      <Tweet
        avatarImage='https://th.bing.com/th/id/OIG.W2yTgqvao7ifWEJwrL0q?pid=ImgGn'
        comments={10}
        likes={50}
        reTweets={4}
        name='Siouxsie'
        profileName='cmonkids'
        time='1h'
      >
        falta uma banda q una todas as tribos.Como foi o Norvana
      </Tweet>
      <HorizontalDivider />
      <Tweet
        avatarImage='https://th.bing.com/th/id/OIG3.KtBBf07lIq50z9XA_UzZ?pid=ImgGn'
        name='Sprite'
        profileName='nerinathedark'
        comments={10}
        likes={100}
        reTweets={34}
        time='1h'
        repostName='Flor da Lua'
        tweetImage='https://raw.githubusercontent.com/coeur-de-biscuit/Pyceptron/refs/heads/main/Group%2012.png'
        navigate={() => navigation.navigate('Profile', { id: 2 })}
      >
        Eu no laguinho
      </Tweet>
      <HorizontalDivider />
      <Tweet
        avatarImage='https://th.bing.com/th/id/OIG2.FJM.ISY9RXUDeDVx8_EA?pid=ImgGn'
        name='Skin of a Killer'
        profileName='fang'
        comments={10}
        likes={100}
        reTweets={34}
        time='1h'
        hasReply
      >
        🏳‍🌈?
        <Reply
          avatarImage='https://i.pinimg.com/736x/16/07/54/1607544d838f182181d0c85ba35867e9.jpg'
          name='Kevin'
          profileName='kevinofc'
          time='7h'
        >
          nossa amizade nunca mais foi a mesma depois q vc tentou me matar.
        </Reply>
      </Tweet>
      <HorizontalDivider />
      <Tweet
        avatarImage='https://i.pinimg.com/736x/16/07/54/1607544d838f182181d0c85ba35867e9.jpg'
        comments={10}
        likes={100}
        reTweets={34}
        name='Kevin'
        profileName='kevinofc'
        time='1h'
        hasReply
      >
        nossa amizade nunca mais foi a mesma depois q vc tentou me matar.
        <Reply
          avatarImage='https://th.bing.com/th/id/OIG2.FJM.ISY9RXUDeDVx8_EA?pid=ImgGn'
          name='Skin of a Killer'
          profileName='fang'
          time='7h'
        >
          Acabaram de me pedir pra ser menos vilenta nos duelos se fuder.
        </Reply>
      </Tweet>
      <HorizontalDivider />
      <Tweet
        avatarImage='https://th.bing.com/th/id/OIG3.TLmM..IrJ3kbxC820w2w?pid=ImgGn'
        name='Flor da Lua'
        profileName='moonflower'
        comments={10}
        likes={50}
        reTweets={4}
        time='4h'
        tweetImage='https://i1.sndcdn.com/artworks-000591636263-vj3qcd-t1080x1080.jpg'
        hasReply
        navigate={() => navigation.navigate('Profile', { id: 3 })}
      >

        <Reply
          avatarImage='https://th.bing.com/th/id/OIG4.IsWScD1sm.iOFFfGTSen?pid=ImgGn'
          name='Rosebud'
          profileName='moonflower2'
          time='7h'
        >
          Pinto
        </Reply>
      </Tweet>
      <HorizontalDivider />
      <Tweet
        avatarImage='https://th.bing.com/th/id/OIG3.LuCz_FsiM5cB5BCwEdS.?pid=ImgGn'
        comments={10}
        likes={100}
        reTweets={34}
        name='Layla'
        profileName='your_angel'
        time='1h'
      >
        Como faz pra ser perfeita assim? Ah, gente, eu já nasci assim, fazer o quê.
      </Tweet>
      <HorizontalDivider />
      <Tweet
        avatarImage='https://th.bing.com/th/id/OIG4.IsWScD1sm.iOFFfGTSen?pid=ImgGn'
        name='Rosebud'
        profileName='moonflower2'
        comments={10}
        likes={50}
        reTweets={4}
        time='4h'
        navigate={() => navigation.navigate('Profile', { id: 1 })}
      >
        Pinto
      </Tweet>
      <HorizontalDivider />
      <Tweet
        avatarImage='https://th.bing.com/th/id/OIG3.TLmM..IrJ3kbxC820w2w?pid=ImgGn'
        comments={10}
        likes={50}
        reTweets={4}
        name='Flor da Lua'
        profileName='moonflower'
        time='4h'
        hasReply
        navigate={() => navigation.navigate('Profile', { id: 3 })}
      >
        nvm.
        <Reply
          name='Flor da Lua'
          profileName='moonflower'
          time='14/09/2024'
          avatarImage='https://th.bing.com/th/id/OIG3.TLmM..IrJ3kbxC820w2w?pid=ImgGn'
        >
          being in love is cool as hell, like having feelings and shit its tight
        </Reply>
      </Tweet>
    </ScrollView>
  );
}

export default Cuitter;