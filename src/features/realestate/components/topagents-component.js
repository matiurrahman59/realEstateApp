import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-paper';

const TopAgents = ({ topAgents }) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={topAgents}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity className='mr-[10px]'>
            <View className='bg-gray--3 p-1 rounded-full'>
              <Avatar.Image size={70} source={{ uri: item.imageUrl }} />
            </View>
            <Text className='font-medium text-center text-[10px] mt-2 text-dark--2 tracking-wide'>
              {item.name}
            </Text>
          </TouchableOpacity>
        );
      }}
      keyExtractor={(item) => item.id}
    />
  );
};

export default TopAgents;
