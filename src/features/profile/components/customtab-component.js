import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import DefaultText from '../../../components/defaulttext-componet';

const CustomTab = ({ titles, onSelectTab }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabPress = (index) => {
    setSelectedTab(index);
    onSelectTab(index);
  };

  return (
    <View className='flex-row items-center justify-between bg-gray--3 rounded-full p-3'>
      {titles.map((title, index) => (
        <TouchableOpacity key={index} onPress={() => handleTabPress(index)}>
          <DefaultText
            className={`text-xs font-semibold leading-3 tracking-normal font-lato py-[10px]  px-6  ${
              selectedTab === index ? 'bg-white rounded-full' : 'text-gray--4'
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
