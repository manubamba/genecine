import * as React from 'react';
import Highlight from './Highlight';
import { connectInfiniteHits } from 'react-instantsearch-native';
import { FlatList, StyleSheet, View } from 'react-native';
import Item from '../schema/Item';

const styles = StyleSheet.create({
  separator: {
    borderBottomWidth: 1
  },
  item: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center'
  }
});

interface InfiniteHitsProps {
  hits: Item[];
  hasMore: boolean;
  refine: () => {};
}

const InfiniteHits = ({ hits, hasMore, refine }: InfiniteHitsProps) => (
  <FlatList
    data={hits}
    keyExtractor={(item: Item) => item.objectID}
    ItemSeparatorComponent={() => <View style={styles.separator} />}
    onEndReached={() => hasMore && refine()}
    renderItem={({ item }) => (
      <View style={styles.item}>
        <Highlight attribute="name" hit={item} />
      </View>
    )}
  />
);

export default connectInfiniteHits(InfiniteHits);
