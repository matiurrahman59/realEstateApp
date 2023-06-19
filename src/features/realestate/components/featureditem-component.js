import { FlatList } from 'react-native';

import HorizontalCardInfo from '../../../components/horizontalcardinfo-component';

const FeaturedEstates = ({ featuredList }) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingLeft: 20, paddingRight: 8 }}
      data={featuredList}
      renderItem={({ item }) => {
        return <HorizontalCardInfo item={item} key={item.id} />;
      }}
      keyExtractor={(item) => item.id}
    />
  );
};

export default FeaturedEstates;
