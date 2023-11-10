import React from 'react';
import { View, Image, Text } from 'react-native';

const HeaderRanking = () => {
  return (
    <View style={{ alignSelf: 'center', alignItems: 'center', flexDirection: 'row', margin: 10 }}>
      <View style={{ height: 40, width: 40 }}>
        <Image
          source={{ uri: 'https://images.ctfassets.net/s5n2t79q9icq/4CLxwCugTjSXCcxaqoYyXU/9fe436164783779426e6416fd483c024/strixhaven-creast-200by200.png' }}
          style={{ flex: 1, height: undefined, width: undefined }}
        />
      </View>
      <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20, marginLeft: 10, color: '#7e7b7b' }}>Strixhaven Rankings</Text>
    </View>
  );
}

export default HeaderRanking;