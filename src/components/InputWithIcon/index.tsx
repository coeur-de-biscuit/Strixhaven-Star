import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import input_with_icon_style from "./style";
import Ionicons from '@expo/vector-icons/Ionicons';

export interface InputProps {
  icon: any;
  placeholder: string;
  editable?: boolean;
  value?: any
  keyboardType?: any
  placeholderTextColor?: string;
  defaultValue?: any
  errorMessage?: string | null;
  onChangeText: (text: string) => void;
}

export default ({ icon, placeholder, onChangeText, value, keyboardType, errorMessage }: InputProps) => {
  const invalid = !!errorMessage;

  const _style = input_with_icon_style();


  return (
    <View style={invalid == true ? { marginBottom: 10 } : { marginBottom: 20 }}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#3f3a5e',
        borderWidth: 1,
        borderRadius: 8,
        marginHorizontal: 10
      }}>
        <Ionicons
          name={icon}
          size={25}
          color={'#3f3a5e'}
          style={{ padding: 10 }}
        />
        <View style={{
          borderRightColor: '#3f3a5e',
          borderRightWidth: 1,
          height: '70%'
        }} />
        <TextInput
          placeholder={placeholder}
          style={{
            flex: 1,
            marginLeft: 10,
            color: 'black',
            //@ts-ignore
            outlineStyle: 'none'
          }}
          onChangeText={onChangeText}
          value={value}
          autoCapitalize='none'
          keyboardType={keyboardType}
        />
      </View>
      {
        invalid == true ?
          <Text style={{ marginHorizontal: 10, color: '#fc2c03' }}>{errorMessage}</Text>
          :
          <></>
      }
    </View>
  )
}