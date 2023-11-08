import { ReactNode } from 'react';
import { View } from 'react-native';

interface PostRootProps {
  children: ReactNode;
}

export function PostRoot({ children }: PostRootProps) {
  return (
    <View>
      {children}
    </View>
  )
}