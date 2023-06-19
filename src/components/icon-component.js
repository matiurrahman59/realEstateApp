import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';

const Icon = ({ onPress, style, boxSize, size, color, bgColor, iconName }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`h-[50px] w-[50px] items-center justify-center rounded-full ${style}`}
    >
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
