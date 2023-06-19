import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-paper';
import DefaultText from '../../../components/defaulttext-componet';

const TopLocations = ({ topLocations }) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingLeft: 20, paddingRight: 8 }}
      data={topLocations}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity className='p-2 pr-4 rounded-full bg-gray--3 mr-3 flex-row items-center space-x-2'>
            <Avatar.Image size={40} source={{ uri: item.imageUrl[0] }} />
            <DefaultText className='font-medium text-xs text-defaultColor'>
              {item.name}
            </DefaultText>
          </TouchableOpacity>
        );
      }}
      keyExtractor={(item) => item.id}
    />
  );
};

export default TopLocations;
