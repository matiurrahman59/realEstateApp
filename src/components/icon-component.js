import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';

const Icon = ({
  onPress,
  style,
  className,
  boxSize,
  size,
  color,
  bgColor,
  iconName,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style} className={className}>
      <Avatar.Icon
        size={boxSize}
        style={{
          backgroundColor: bgColor,
        }}
        icon={() => <Ionicons name={iconName} size={size} color={color} />}
      />
    </TouchableOpacity>
  );
};

export default Icon;
