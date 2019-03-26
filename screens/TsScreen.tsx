import * as React from "react";
import algoliasearch from "algoliasearch/lite";
import Filters from "./Filters";
import InfiniteHits from "./InfiniteHits";
import SearchBox from "./SearchBox";
import { Button, StyleSheet, Text, View } from "react-native";
import { InstantSearch, connectRefinementList  } from "react-instantsearch-native";

const searchClient = algoliasearch(
  "5QD8782XZG",
  "fc49e07f378c19fb4f64281a44c76bf3"
);

const styles = StyleSheet.create({
  closeButton: {
    alignItems: "center",
    marginTop: 20
  },
  closeButtonText: {
    fontSize: 18
  }
});

interface TsScreenState {
  isModalOpen: boolean;
  searchState: any;
}

const VirtualRefinementList = connectRefinementList(() => null);

export default class TsScreen extends React.Component<{}, TsScreenState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isModalOpen: false,
      searchState: {}
    };
  }

  toggleModal = () =>
    this.setState(({ isModalOpen }) => ({
      isModalOpen: !isModalOpen
    }));

  onSearchStateChange = (searchState: any) =>
    this.setState(() => ({
      searchState
    }));

  render() {
    const { isModalOpen, searchState } = this.state;
    return (
      <View>
        <InstantSearch
          indexName="dev_brandedMeds"
          searchClient={searchClient}
          searchState={searchState}
          onSearchStateChange={this.onSearchStateChange}
        >
        <VirtualRefinementList attribute="category" />
          <Filters
            isModalOpen={isModalOpen}
            searchClient={searchClient}
            searchState={searchState}
            toggleModal={this.toggleModal}
            onSearchStateChange={this.onSearchStateChange}
          />
          <SearchBox text="Type the medicine name" />
          <Button title="Filters" color="#252b33" onPress={this.toggleModal} />
          <InfiniteHits />
        </InstantSearch>
        <Text>{"\n"} That's all for now</Text>
      </View>
    );
  }
}
