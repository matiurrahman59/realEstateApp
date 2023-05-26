import { FlatList } from 'react-native';

import HorizontalCardInfo from '../../../components/horizontalcardinfo-component';

const FeaturedEstates = ({ featuredList }) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={featuredList}
      renderItem={({ item }) => {
        return <HorizontalCardInfo item={item} key={item.id} />;
      }}
      keyExtractor={(item) => item.id}
    />
  );
};

export default FeaturedEstates;
