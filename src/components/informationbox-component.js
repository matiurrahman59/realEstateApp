import React from 'react';
import { Text, View } from 'react-native';
import DefaultText from './defaulttext-componet';

const InformationBox = ({ value, title, icon, active }) => {
  return (
    <>
      <View
        className={`  h-[70px] rounded-3xl flex-1 items-center justify-center ${
          active ? 'bg-gray--2' : 'border-2 border-[#ECEDF3]'
        }`}
      >
        <View className='items-center'>
          <DefaultText className='font-lato text-[14px] leading-4 font-bold'>
            {value}
          </DefaultText>
          {icon && icon}
          {title && (
            <DefaultText className='font-lato text-xs font-medium'>
              {title}
            </DefaultText>
          )}
        </View>
      </View>
    </>
  );
};

export default InformationBox;
