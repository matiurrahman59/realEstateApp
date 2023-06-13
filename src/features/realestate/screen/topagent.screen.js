import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-paper';

import { FlatList } from 'react-native';
import DefaultText from '../../../components/defaulttext-componet';
import SectionHeader from '../../../components/seactionheader-component';
import { topAgents, userData } from '../../../constants';

const TopAgentScreen = () => {
  return (
    <ScrollView className=' bg-white'>
      <View className='mx-6'>
        {/* Header text */}
        <SectionHeader
          leftTitle='Top Estate Agent'
          style='font-bold text-[25px] leading-10'
          containerStyle='mb-0'
        />
        <DefaultText>Find the best recommendations place to live</DefaultText>

        {/* Agent list */}
        <View className='pt-[35px] flex-row flex-wrap justify-between'>
          {topAgents.map((item) => (
            <TouchableOpacity className='bg-gray--3 p-4 pt-[50px] mb-2 rounded-[25px] relative max-w-[170px] w-full'>
              {/* Agent number count */}
              <View className='absolute bg-primary rounded-lg top-4 left-4'>
                <View className='flex-row py-[5px] px-2 items-baseline'>
                  <Text className='text-white font-montserrat font-semibold text-[10px] items-baseline'>
                    &#35;
                  </Text>
                  <Text className='text-white font-montserrat font-semibold tracking-wide text-sm'>
                    {item.rank}
                  </Text>
                </View>
              </View>

              {/* Main content */}
              <View className='items-center space-y-[10px]'>
                <Avatar.Image source={{ uri: item.imageUrl }} size={96} />
                <DefaultText className='text-[14px] font-bold leading-4 font-lato'>
                  {item.name}
                </DefaultText>

                {/* Rating & sold */}
                <View className='flex-row items-end space-x-3'>
                  {/* Rating */}
                  <View className='flex-row items-center space-x-1'>
                    <Ionicons name='star' size={12} color='#FFC42D' />
                    <DefaultText className='font-bold leading-[10px] text-xs text-[#53587A]'>
                      {item.rating}
                    </DefaultText>
                  </View>

                  {/* Sold */}
                  <View className='flex-row items-center space-x-[3px]'>
                    <Ionicons name='home' size={12} color='#234F68' />
                    <Text className='font-montserrat font-bold text-xs text-bodyText'>
                      112
                    </Text>
                    <DefaultText>sold</DefaultText>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default TopAgentScreen;
