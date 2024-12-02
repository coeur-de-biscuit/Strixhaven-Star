import React from 'react';
import { View } from 'react-native';
import Tweet from '../../../Cuitter/components/Tweet';
import Reply from '../../../Cuitter/components/ReTweet';
import HorizontalDivider from '../../../../components/HorizontalDivider';

// import { Container } from './styles';

const ProfileCuitterAmy: React.FC = () => {
  return (
    <View style={{ padding: 20 }}>
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
        avatarImage='https://th.bing.com/th/id/OIG4.IsWScD1sm.iOFFfGTSen?pid=ImgGn'
        name='Rosebud'
        profileName='moonflower2'
        comments={10}
        likes={50}
        reTweets={4}
        time='4h'
      >
        Pinto
      </Tweet>
      <HorizontalDivider />
    </View>
  );
}

export default ProfileCuitterAmy;