import React from 'react';
import { ScrollView, View, Image, Dimensions, Text } from 'react-native';
import Badge from '../../components/Badge';

// import { Container } from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/stack.routes';

const RankingDetail = () => {

  var navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const dimensions = Dimensions.get('window');

  return (
    <>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Ionicons
          name='arrow-back-outline'
          size={24}
          onPress={() => navigation.goBack()}
          color={'black'}
          style={{margin: 30}}
        />

        <View style={{ marginHorizontal: 30 }}>
          <View style={{ height: dimensions.width, borderRadius: 40 }}>
            <Image
              source={require('../../assets/img/felisa.jpeg')}
              style={{ flex: 1, width: undefined, height: undefined, borderRadius: 40 }}
            />
          </View>
        </View>
        <View style={{ marginTop: 25, marginLeft: 30 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 22, color: '#352b2b' }}>Felisa Fang</Text>
          <Text style={{ fontSize: 18, marginBottom: 20 }}>Silverquill</Text>
          <View style={{ flexDirection: 'row' }}>
            <Badge
              title='Mage Tower'
              color='black'
              style={{ marginRight: 15 }}
            />
            <Badge
              title='Duelista'
              color='red'
              style={{ marginRight: 15 }}
            />
            <Badge
              title='Vampiro'
              color='red'
              style={{ marginRight: 15 }}
            />
          </View>

        </View>
        <View style={{ margin: 30 }}>
          <Text style={{ fontSize: 20, color: '#504b4b' }}>
            {`
            Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.

            Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.

              Trysail Sail ho Corsair red ensign hulk smartly boom jib rum gangway. Case shot Shiver me timbers gangplank crack Jennys tea cup ballast Blimey lee snow crow's nest rutters. Fluke jib scourge of the seven seas boatswain schooner gaff booty Jack Tar transom spirits.
              `}
          </Text>
        </View>
      </ScrollView>
    </>
  );
}

export default RankingDetail;