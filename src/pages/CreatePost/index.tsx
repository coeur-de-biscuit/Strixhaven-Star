import React from 'react';
import { Dimensions, Text, TextInput, View } from 'react-native';

const CreatePost: React.FC = () => {
  const dimensions = Dimensions.get('window');

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', height: dimensions.height }}>
      <TextInput
        placeholder='No que está pensando?'
        multiline
        numberOfLines={4}
        style={{
          alignItems: 'center',
          fontSize: 24,
          //@ts-ignore
          outlineStyle: 'none',
          textAlign: 'center',
          width: '90%'
        }}
      />
      <View style={{backgroundColor: '#d945d1', borderRadius: 10, marginTop: 30}}>
        <Text style={{padding: 5, margin: 10}}>Adicionar foto</Text>
      </View>
    </View>
  )
}

export default CreatePost;