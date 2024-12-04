import { ReactNode, useState } from 'react';
import { Dimensions, Modal, Pressable, Text, View } from 'react-native';

interface PostRootProps {
  children: ReactNode;
}

export function PostRoot({ children }: PostRootProps) {

  return (
    <View style={{ marginBottom: 20 }}>
      <View style={{ margin: 10 }}>
        {children}
      </View>


    </View>


  )
}