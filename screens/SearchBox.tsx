import * as React from "react";
import { StyleSheet } from "react-native";
import { connectSearchBox } from "react-instantsearch-native";
import { SearchBar } from "react-native-elements";

const styles = StyleSheet.create({
  input: {
    height: 50,
    padding: 15
  },
  containerStyle: {
    backgroundColor: "#003366"
  },
  inputContainerStyle: {
    backgroundColor: "#ffffff"
  }
});

interface SearchBoxProps {
  currentRefinement: string;
  refine: (a: string) => {};
  text: string;
}

const SearchBox = ({ currentRefinement, refine, text }: SearchBoxProps) => {
  
  return (
    <SearchBar
      lightTheme={true}
      style={styles.input}
      onChangeText={value => refine(value)}
      value={currentRefinement}
      placeholder={text}
      clearIcon
      containerStyle={styles.containerStyle}
      inputContainerStyle={styles.inputContainerStyle}
    />
  );
};

export default connectSearchBox(SearchBox);
