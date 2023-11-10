import React from 'react';
import { Text, View } from 'react-native';

interface BadgeProps {
  title: string;
  color: string;
}

const Badge = ({ title, color }: BadgeProps) => {
  return (
    <View style={{ borderWidth: 1, borderColor: color, alignSelf: 'flex-start', alignItems: 'center', padding: 2, borderRadius: 15 }}>
      <Text style={{ marginHorizontal: 15, color: color }}>{title}</Text>
    </View>
  );
}

export default Badge;