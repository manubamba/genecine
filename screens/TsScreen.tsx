import * as React from "react";
import { Text, View, StyleSheet  } from "react-native";
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch
} from 'react-instantsearch-native';
import SearchBox from './SearchBox';
import InfiniteHits from './InfiniteHits';

const searchClient = algoliasearch(
  '5QD8782XZG',
  'fc49e07f378c19fb4f64281a44c76bf3'
);

const styles = StyleSheet.create({
  closeButton: {
    alignItems: 'center',
    marginTop: 20,
  },
  closeButtonText: {
    fontSize: 18,
  },
});

export const TsScreen = () => (
  <View>
    <InstantSearch indexName="dev_brandedMeds" searchClient={searchClient}>
    <SearchBox text= "Type the medicine name"/>
    <InfiniteHits />
    </InstantSearch>
    <Text>{"\n"} That's all for now</Text>
  </View>
);

export default TsScreen;
