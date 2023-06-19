import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import DefaultText from './defaulttext-componet';

const SocialIcon = ({ googleIcon, text, active }) => {
  return (
    <TouchableOpacity
      className={`${
        active ? 'bg-secondary' : 'bg-gray--3'
      }  flex-grow p-4 flex-row items-center justify-center rounded-3xl space-x-3`}
    >
      <Image source={googleIcon} className='h-[25px] w-[25px] rounded-full' />
      {text && (
        <DefaultText className='font-lato font-semibold text-sm text-white leading-[14px]'>
          UnLink
        </DefaultText>
      )}
    </TouchableOpacity>
  );
};

export default SocialIcon;
