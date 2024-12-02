import React from 'react';
import { View } from 'react-native';

const HorizontalDivider: React.FC = () => {
  return (
    <View
      style={{
        width: '100%',
        borderBottomWidth: 1,
        borderColor: 'gray',
        marginBottom: 10
      }}
    />
  );
}

export default HorizontalDivider;