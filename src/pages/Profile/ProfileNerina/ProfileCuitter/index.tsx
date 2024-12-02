import React from 'react';
import { View } from 'react-native';
import Tweet from '../../../Cuitter/components/Tweet';
import Reply from '../../../Cuitter/components/ReTweet';
import HorizontalDivider from '../../../../components/HorizontalDivider';

// import { Container } from './styles';

const ProfileCuitterNeri: React.FC = () => {
  return (
    <View style={{ padding: 20 }}>
      <Tweet
        avatarImage='https://th.bing.com/th/id/OIG3.KtBBf07lIq50z9XA_UzZ?pid=ImgGn'
        name='Sprite'
        profileName='nerinathedark'
        comments={10}
        likes={100}
        reTweets={34}
        time='1h'
        tweetImage='https://raw.githubusercontent.com/coeur-de-biscuit/Pyceptron/refs/heads/main/Group%2012.png'
      >
        Eu no laguinho
      </Tweet>
      <HorizontalDivider />
    </View>
  );
}

export default ProfileCuitterNeri;