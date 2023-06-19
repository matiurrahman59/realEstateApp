import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import DefaultText from '../../../components/defaulttext-componet';

const CustomTab = ({ titles, onSelectTab, style }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabPress = (index) => {
    setSelectedTab(index);
    onSelectTab(index);
  };

  return (
    <View className='flex-row justify-between bg-gray--3 rounded-full px-2 py-[9px]'>
      {titles.map((title, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleTabPress(index)}
          className={`flex-auto items-center justify-center ${
            selectedTab === index ? 'bg-white rounded-full py-3' : ''
          }`}
        >
          <DefaultText
            className={`text-xs font-semibold leading-3 tracking-normal font-lato ${style} ${
              selectedTab !== index && 'text-gray--4'
            }`}
          >
            {title}
          </DefaultText>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CustomTab;
