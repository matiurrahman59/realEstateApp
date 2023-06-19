import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-paper';
import DefaultText from '../../../components/defaulttext-componet';

const FeatureList = ({ quantity, title, icon, containerStyle, labelStyle }) => {
  return (
    <TouchableOpacity
      className={`py-[15px] px-6 rounded-full mr-3 ${
        containerStyle ? containerStyle : 'bg-gray--3'
      }`}
    >
      <View className='flex-row items-center space-x-1'>
        {icon && (
          <Avatar.Icon
            icon={icon}
            color='#8BC83F'
            size={25}
            className='bg-transparent'
          />
        )}

        <DefaultText
          className={`text-xs font-medium ${
            labelStyle ? labelStyle : 'text-bodyText'
          } `}
        >
          {quantity} {title}
        </DefaultText>
      </View>
    </TouchableOpacity>
  );
};

export default FeatureList;
