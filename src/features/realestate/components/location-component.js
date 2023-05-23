import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Text, View } from 'react-native';

const Location = () => {
  return (
    <View className='flex-row items-center justify-center  bg-slate-400 px-3 h-full rounded-full space-x-2'>
      <Ionicons name='location' size={15} color='#252B5C' />
      <Text className='text-dark--2 text-[10px] font-medium tracking-wider'>
        Jakarta Indonesia
      </Text>

      <Ionicons
        name='chevron-down'
        size={15}
        color='#252B5C'
        className='text-dark--2'
      />
    </View>
  );
};

export default Location;
