import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-paper';

const TopLocations = ({ topLocations }) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={topLocations}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity className='p-2 pr-4 rounded-full bg-gray--3 mr-[10px] flex-row items-center space-x-2'>
            <Avatar.Image size={40} source={{ uri: item.imageUrl[0] }} />
            <Text className='font-medium text-[10px] text-dark--2 tracking-wide'>
              {item.name}
            </Text>
          </TouchableOpacity>
        );
      }}
      keyExtractor={(item) => item.id}
    />
  );
};

export default TopLocations;
