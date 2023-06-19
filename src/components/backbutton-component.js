import { useNavigation } from '@react-navigation/native';
import React from 'react';

import Icon from './icon-component';

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <Icon
      iconName='chevron-back'
      bgColor='#DFDFDF'
      color='#252B5C'
      boxSize={50}
      size={20}
      onPress={() => navigation.goBack()}
      style='ml-5'
    />
  );
};

export default BackButton;
