import React from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';

const TouchableButton = ({
  contentContainerStyle,
  label,
  labelStyle,
  prependComponent,
  appendComponent,
  onPress,
  disabled,
}) => {
  return (
    <TouchableOpacity
      className={`bg-primary rounded-lg justify-center ${contentContainerStyle}`}
      disabled={disabled}
      onPress={onPress}
    >
      <View className='items-center justify-center flex-row'>
        {appendComponent}
        <Text className={`text-white text-base  ${labelStyle}`}>{label}</Text>
        {prependComponent}
      </View>
    </TouchableOpacity>
  );
};

export default TouchableButton;
