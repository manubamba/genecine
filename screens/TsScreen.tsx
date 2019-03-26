import * as React from 'react';
import algoliasearch from 'algoliasearch/lite';
import InfiniteHits from './InfiniteHits';
import SearchBox from './SearchBox';
import { InstantSearch } from 'react-instantsearch-native';
import { StyleSheet, Text, View } from 'react-native';

const searchClient = algoliasearch(
  '5QD8782XZG',
  'fc49e07f378c19fb4f64281a44c76bf3'
);

const styles = StyleSheet.create({
  closeButton: {
    alignItems: 'center',
    marginTop: 20
  },
  closeButtonText: {
    fontSize: 18
  }
});

export const TsScreen = () => (
  <View
    style={{
      marginTop: 30
    }}
  >
    <InstantSearch indexName="dev_brandedMeds" searchClient={searchClient}>
      <SearchBox text="Type the medicine name" />
      <InfiniteHits />
    </InstantSearch>
    <Text>{'\n'} That's all for now</Text>
  </View>
);

TsScreen.navigationOptions = {
  header: null
};

export default TsScreen;
