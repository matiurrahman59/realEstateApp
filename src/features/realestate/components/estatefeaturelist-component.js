import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-paper';
import DefaultText from '../../../components/defaulttext-componet';

const FeatureList = ({ quantity, title, icon }) => {
  return (
    <TouchableOpacity className='py-[15px] px-6 rounded-full mr-[10px] bg-gray--3'>
      <View className='flex-row items-center space-x-1'>
        <Avatar.Icon
          icon={icon}
          color='#8BC83F'
          size={25}
          className='bg-transparent'
        />
        <DefaultText className='text-xs font-medium text-bodyText'>
          {quantity} {title}
        </DefaultText>
      </View>
    </TouchableOpacity>
  );
};

export default FeatureList;