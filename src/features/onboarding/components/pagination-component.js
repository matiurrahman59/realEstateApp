import { StyleSheet, View } from 'react-native';
import onBoardingData from '../../../assets/dummyData/onBoradingData.json';

const Pagination = ({ currentSlideIndex }) => {
  return (
    <View className='flex-row items-center justify-center'>
      {onBoardingData?.map((_, i) => (
        <View
          key={i}
          className='h-4 w-4 bg-gray--2 mx-1 rounded-full'
          style={[
            currentSlideIndex === i && {
              backgroundColor: 'white',
              width: 40,
            },
          ]}
        />
      ))}
    </View>
  );
};

export default Pagination;
