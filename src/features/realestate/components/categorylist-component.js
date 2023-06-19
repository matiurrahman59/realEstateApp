import React, { useState } from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const CategoryList = ({ category }) => {
  const [activeCategory, setActiveCategory] = useState(1);

  return (
    <View className='pt-5'>
      <FlatList
        data={category}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 20, paddingRight: 8 }}
        renderItem={({ item }) => {
          const isActive = item.id === activeCategory;

          return (
            <TouchableOpacity
              key={item.id}
              onPress={() => setActiveCategory(item.id)}
              className={`py-[18px] px-6 mr-3 rounded-full ${
                isActive ? 'bg-secondary' : 'bg-gray--3'
              }`}
            >
              <View>
                <Text
                  className={`text-xs tracking-wide font-raleway ${
                    isActive ? 'text-white font-bold' : 'font-medium'
                  }`}
                >
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id}
      />
      {/* <ScrollView horizontal className='px-5'>
        {category?.map((item, i) => {
          const isActive = item.id === activeCategory;
          return (
            <TouchableOpacity
              key={i}
              onPress={() => setActiveCategory(item.id)}
              className={`py-[18px] px-6 rounded-full mr-3 ${
                isActive ? 'bg-secondary' : 'bg-gray--3'
              }`}
            >
              <View>
                <Text
                  className={`text-xs tracking-wide font-raleway ${
                    isActive ? 'text-white font-bold' : 'font-medium'
                  }`}
                >
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView> */}
    </View>
  );
};

export default CategoryList;
