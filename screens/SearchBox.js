import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import PropTypes from 'prop-types';
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

const SearchBox = ({ currentRefinement, refine, text }) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      onChangeText={value => refine(value)}
      value={currentRefinement}
      placeholder={text}
    />
  </View>
);

SearchBox.propTypes = {
  currentRefinement: PropTypes.string.isRequired,
  refine: PropTypes.func.isRequired,
  text: PropTypes.string
};

export default connectSearchBox(SearchBox);