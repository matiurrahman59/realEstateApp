import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import DefaultText from './defaulttext-componet';

const SectionHeader = ({ leftTitle, rightTitle, style, onPress }) => {
  const defaultStyles = 'font-bold text-[18px] font-lato leading-[22px]';
  const mergedStyles = `${defaultStyles} ${style}`;

  return (
    <View className='flex-row justify-between items-center pr-6 mb-5'>
      <DefaultText className={mergedStyles}>{leftTitle}</DefaultText>
      {rightTitle && (
        <TouchableOpacity onPress={onPress}>
          <DefaultText className='font-semibold text-xs text-secondary'>
            {rightTitle}
          </DefaultText>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SectionHeader;
