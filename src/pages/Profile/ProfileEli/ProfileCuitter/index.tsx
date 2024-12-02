import React from 'react';
import { View } from 'react-native';
import Tweet from '../../../Cuitter/components/Tweet';
import Reply from '../../../Cuitter/components/ReTweet';
import HorizontalDivider from '../../../../components/HorizontalDivider';

// import { Container } from './styles';

const ProfileCuitterEli: React.FC = () => {
  return (
    <View style={{ padding: 20 }}>
      <Tweet
        avatarImage='https://th.bing.com/th/id/OIG3.TLmM..IrJ3kbxC820w2w?pid=ImgGn'
        comments={10}
        likes={100}
        reTweets={34}
        name='Flor da Lua'
        profileName='moonflower'
        time='1h'

      >
        Hahahahahahahaha How The Fuck Is Cyber Bullying Real Hahahaha Dude Just Walk Away From The Screen Like Dude Close Your Eyes Haha
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

      >
        Pena que ninguém morreu.
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
        avatarImage='https://th.bing.com/th/id/OIG3.TLmM..IrJ3kbxC820w2w?pid=ImgGn'
        comments={10}
        likes={50}
        reTweets={4}
        name='Flor da Lua'
        profileName='moonflower'
        time='4h'
        hasReply
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
      <HorizontalDivider />
    </View>
  );
}

export default ProfileCuitterEli;