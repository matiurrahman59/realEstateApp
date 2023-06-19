import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const RatingStars = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <View className='flex-row'>
      {[...Array(fullStars)].map((_, index) => (
        <Icon key={index} name='star' size={20} color='gold' />
      ))}
      {hasHalfStar && <Icon name='star-half-o' size={20} color='gold' />}
      {[...Array(remainingStars)].map((_, index) => (
        <Icon key={index} name='star-o' size={20} color='gold' />
      ))}
    </View>
  );
};

export default RatingStars;
