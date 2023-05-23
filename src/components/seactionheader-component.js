import React from 'react';
import { Text, View } from 'react-native';

const SectionHeader = ({ leftTitle, rightTitle }) => {
  return (
    <View className='flex-row justify-between items-center pr-6 mb-5'>
      <Text className='font-bold text-[18px] text-dark--2 leading-[22px] tracking-wide'>
        {leftTitle}
      </Text>
      {rightTitle && (
        <Text className='font-semibold text-xs text-secondary  tracking-wide'>
          {rightTitle}
        </Text>
      )}
    </View>
  );
};

export default SectionHeader;
