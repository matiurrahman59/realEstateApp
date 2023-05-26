import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-paper';
import DefaultText from '../../../components/defaulttext-componet';

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
            <DefaultText className='font-medium text-center text-xs mt-2'>
              {item.name}
            </DefaultText>
          </TouchableOpacity>
        );
      }}
      keyExtractor={(item) => item.id}
    />
  );
};

export default TopAgents;
