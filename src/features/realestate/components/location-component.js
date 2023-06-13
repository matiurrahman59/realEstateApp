import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Location = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className='flex-row items-center justify-center bg-white px-3 h-full rounded-full space-x-2'
    >
      <Ionicons name='location' size={15} color='#252B5C' />
      <Text className='text-xs leading-3 font-raleway font-medium tracking-wide'>
        Jakarta Indonesia
      </Text>

      <Ionicons
        name='chevron-down'
        size={15}
        color='#252B5C'
        className='text-defaultColor'
      />
    </TouchableOpacity>
  );
};

export default Location;
