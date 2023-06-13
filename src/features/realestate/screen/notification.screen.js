import React, { useLayoutEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Avatar, Badge } from 'react-native-paper';

import DefaultText from '../../../components/defaulttext-componet';
import Icon from '../../../components/icon-component';
import SectionHeader from '../../../components/seactionheader-component';
import {
  onBoardingImages,
  reviewCategoryList,
  userIMage,
} from '../../../constants';
import CustomTab from '../../profile/components/customtab-component';
import CategoryList from '../components/categorylist-component';

const NotificationScreen = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleTabSelect = (index) => {
    setSelectedTab(index);
  };

  //  Setting header style
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity className='ml-5 h-[50px] w-[50px] items-center justify-center rounded-full'>
          <Icon
            iconName='chevron-back'
            bgColor='#DFDFDF'
            color='#252B5C'
            boxSize={50}
            size={20}
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity className='mr-5 h-[50px] w-[50px] items-center justify-center rounded-full'>
          <Icon
            iconName='trash-outline'
            bgColor='#DFDFDF'
            color='#252B5C'
            boxSize={50}
            size={20}
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <ScrollView className='flex-1 bg-white pt-5'>
      <View className='px-5'>
        <CustomTab
          onSelectTab={handleTabSelect}
          titles={['Notification', 'Messages']}
          style='px-12'
        />
      </View>

      {selectedTab === 0 ? (
        <View>
          <CategoryList category={reviewCategoryList} />

          {/* Todays notification */}
          <View className='py-9 px-5'>
            <SectionHeader leftTitle='Today' />
            <View>
              {/* Review details */}
              <View className='space-y-2'>
                {/* Review no 2 */}
                <View className='bg-gray--3 rounded-[20px] p-[10px]'>
                  <View className='flex-row space-x-[10px]'>
                    <Avatar.Image source={userIMage} size={50} />
                    <View className='flex-1 pt-[10px] space-y-2'>
                      <DefaultText className='font-bold'>
                        Emmet Perry
                      </DefaultText>
                      <Text className='font-medium font-raleway text-xs tracking-wide'>
                        Just messaged you. Check the message in message tab.
                      </Text>
                      <DefaultText className='font-montserrat  text-[10px] text-gray--4 tracking-tight'>
                        10 mins ago
                      </DefaultText>
                    </View>
                  </View>
                </View>

                {/* Review no 2 */}
                <View className='bg-gray--3 rounded-[20px] p-[10px]'>
                  <View className='flex-row space-x-[10px]'>
                    <Avatar.Image source={userIMage} size={50} />
                    <View className='flex-1 pt-[10px] space-y-2'>
                      <DefaultText className='font-bold'>Geraldo</DefaultText>
                      <Text className='font-medium font-raleway text-xs tracking-wide'>
                        Just giving 5 Star review on your listing Fairview
                        Apartment
                      </Text>
                      <DefaultText className='font-montserrat  text-[10px] text-gray--4 tracking-tight'>
                        10 mins ago
                      </DefaultText>
                    </View>
                    <View className='bg-white p-[2px] rounded-[10px] w-[60px] h-[50px]'>
                      <Image
                        source={onBoardingImages.image1}
                        className='h-full w-full rounded-[10px]'
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* Older notifications */}
          <View className='px-5 pt-5 pb-10'>
            <SectionHeader leftTitle='Older notifications' />
            <View className=''>
              {/* Review details */}
              <View className='space-y-2'>
                {/* Review no 2 */}
                <View className='bg-gray--3 rounded-[20px] p-[10px]'>
                  <View className='flex-row space-x-[10px]'>
                    <Avatar.Image source={userIMage} size={50} />
                    <View className='flex-1 pt-[10px] space-y-2'>
                      <DefaultText className='font-bold'>
                        Emmet Perry
                      </DefaultText>
                      <Text className='font-medium font-raleway text-xs tracking-wide'>
                        Just messaged you. Check the message in message tab.
                      </Text>
                      <DefaultText className='font-montserrat  text-[10px] text-gray--4 tracking-tight'>
                        2 days ago
                      </DefaultText>
                    </View>
                  </View>
                </View>

                {/* Review no 2 */}
                <View className='bg-gray--3 rounded-[20px] p-[10px]'>
                  <View className='flex-row space-x-[10px]'>
                    <Avatar.Image source={userIMage} size={50} />
                    <View className='flex-1 pt-[10px] space-y-2'>
                      <DefaultText className='font-bold'>Geraldo</DefaultText>
                      <Text className='font-medium font-raleway text-xs tracking-wide'>
                        Just giving 5 Star review on your listing Fairview
                        Apartment
                      </Text>
                      <DefaultText className='font-montserrat  text-[10px] text-gray--4 tracking-tight'>
                        10 mins ago
                      </DefaultText>
                    </View>
                    <View className='bg-white p-[2px] rounded-[10px] w-[60px] h-[50px]'>
                      <Image
                        source={onBoardingImages.image1}
                        className='h-full w-full rounded-[10px]'
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      ) : (
        <View className='py-9 px-5'>
          <SectionHeader leftTitle='All chats' />
          <View>
            {/* Review details */}
            <View className='space-y-2'>
              {/* Review no 2 */}
              <View className='bg-gray--3 rounded-[20px] p-[10px] w-full'>
                <View className='flex-row items-center justify-between'>
                  <View className='flex-row items-center'>
                    <Avatar.Image source={userIMage} size={50} />
                    <View className='space-y-2 pl-[10px] max-w-[230px]'>
                      <DefaultText className='font-bold'>Milano</DefaultText>
                      <DefaultText className='font-bold'>
                        tempor incididunt ut labore et dolore labore et dolore
                      </DefaultText>
                    </View>
                  </View>

                  <View className='items-center justify-center p-2 space-y-1'>
                    <DefaultText className='font-montserrat text-[10px] text-gray--4 tracking-tight'>
                      10.45
                    </DefaultText>
                    <Badge
                      style={{
                        backgroundColor: '#8BC83F',
                      }}
                    >
                      1
                    </Badge>
                  </View>
                </View>
              </View>

              {/* Review no 2 */}
              <View className='bg-gray--3 rounded-[20px] p-[10px] w-full'>
                <View className='flex-row items-center justify-between'>
                  <View className='flex-row items-center'>
                    <Avatar.Image source={userIMage} size={50} />
                    <View className='space-y-2 pl-[10px] max-w-[230px]'>
                      <DefaultText className='font-bold'>Milano</DefaultText>
                      <DefaultText className='font-medium text-bodyText'>
                        tempor incididunt ut labore et dolore labore et dolore
                      </DefaultText>
                    </View>
                  </View>

                  <View className='items-center justify-center p-2 space-y-1'>
                    <DefaultText className='font-montserrat text-[10px] text-gray--4 tracking-tight'>
                      10.45
                    </DefaultText>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default NotificationScreen;
