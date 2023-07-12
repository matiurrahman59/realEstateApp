import React from 'react';
import { Text, View } from 'react-native';
import DefaultText from '../../../components/defaulttext-componet';

const HeadingText = ({ textOne, textTwo }) => {
  return (
    <View className='pt-11 flex-row gap-1'>
      <DefaultText className='font-lato font-medium text-2xl leading-10'>
        {textOne}
      </DefaultText>
      <DefaultText className='font-lato font-extrabold text-2xl leading-10 text-secondary'>
        {textTwo}
      </DefaultText>
    </View>
  );
};

export default HeadingText;
