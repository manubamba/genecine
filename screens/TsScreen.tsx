import * as React from 'react';
import algoliasearch from 'algoliasearch/lite';
import InfiniteHits from './InfiniteHits';
import RefinementList from './RefinementList';
import SearchBox from './SearchBox';
import { InstantSearch } from 'react-instantsearch-native';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

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
    <RefinementList attribute="category" limit={5} />
    <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
    <InfiniteHits />
    </InstantSearch>
    <Text>{"\n"} That's all for now</Text>
  </View>
);

export default TsScreen;
