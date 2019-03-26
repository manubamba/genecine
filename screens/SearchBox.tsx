import * as React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { connectSearchBox } from 'react-instantsearch-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#252b33',
  },
  input: {
    height: 40,
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
});

interface SearchBoxProps {
  currentRefinement: string,
  refine: (a : string) => {},
  text: string
}

const SearchBox = ({ currentRefinement, refine, text } : SearchBoxProps) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      onChangeText={value => refine(value)}
      value={currentRefinement}
      placeholder={text}
    />
  </View>
);

export default connectSearchBox(SearchBox);