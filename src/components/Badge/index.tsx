import React from 'react';
import { Text, View, StyleProp, ViewStyle } from 'react-native';

interface BadgeProps {
  title: string;
  color: string;
  style?: StyleProp<ViewStyle>;
}

const Badge = ({ title, color, style }: BadgeProps) => {
  return (
    <View style={[{ borderWidth: 1, borderColor: color, alignSelf: 'flex-start', alignItems: 'center', padding: 2, borderRadius: 15 }, style]}>
      <Text style={{ marginHorizontal: 15, color: color }}>{title}</Text>
    </View>
  );
}

export default Badge;