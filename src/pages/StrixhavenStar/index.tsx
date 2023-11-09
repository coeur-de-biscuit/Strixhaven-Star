import React from 'react';
import { Dimensions, Image, Text, View } from 'react-native';

const dimensions = Dimensions.get('window');

const StrixhavenStar: React.FC = () => {
  return(
    <View>
      <View>
        <Text style={{ fontWeight: 'bold', fontSize: 26 }}>Noticias quentes</Text>
        <View style={{ height: 300, width: dimensions.width }}>
          <Image
            source={{uri:  'https://th.bing.com/th/id/OIG.eVAyly1MNw_3thaMH_0p?pid=ImgGn'}}
            style={{ flex: 1, height: undefined, width: undefined}}
          />
          <Text>Felisa é vista andando de mãos dadas com Amélia Moonflower, na saida do treino do time de Silverquill</Text>
        </View>
      </View>

      <View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ width: 100, height: 100, borderRadius: 7 }}> 
            <Image 
              source={{uri: 'https://th.bing.com/th/id/OIG.DZHWvWBLP2kZabmXB5OT?pid=ImgGn'}}
              style={{ flex: 1, width: undefined, height: undefined, borderRadius: 7 }}
            />
          </View>
          <View style={{ width: dimensions.width * 0.6, marginLeft: 20 }}>
            <Text numberOfLines={2} style={{ fontWeight: 'bold', fontSize: 18, flexShrink: 1 }}>Clube de Xadres tem o seu maior numero de incrito desde os ultimos quatro anos</Text>
            <Text>
              <Text>6 Mins Read</Text>
              <Text> - Today</Text>
            </Text>
            <View style={{ borderWidth: 1, borderColor: '#4287f5',  alignSelf: 'flex-start' , alignItems: 'center', padding: 2, borderRadius: 15 }}>
              <Text style={{ marginHorizontal: 15 }}>Fofoca</Text>
            </View>
          </View>
        
        </View>
      </View>
    </View>
  )
}

export default StrixhavenStar;