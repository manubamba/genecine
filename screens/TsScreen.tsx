import * as React from 'react';
import algoliasearch from 'algoliasearch/lite';
import Filters from './Filters';
import InfiniteHits from './InfiniteHits';
import SearchBox from './SearchBox';
import { Button } from 'react-native-elements';
import { connectRefinementList, InstantSearch } from 'react-instantsearch-native';
import { NavigationScreenProps } from 'react-navigation';
import { Text, View } from 'react-native';

const searchClient = algoliasearch(
  "5QD8782XZG",
  "fc49e07f378c19fb4f64281a44c76bf3"
);

interface TsScreenState {
  isModalOpen: boolean;
  searchState: any;
}

interface TsScreenProps extends NavigationScreenProps {}

const VirtualRefinementList = connectRefinementList(() => null);

class TsScreen extends React.Component<TsScreenProps, TsScreenState> {
  static navigationOptions = {
    header: null
  };
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

    navigateToMedDetails = (id: string) => {
      console.log(id);
      this.props.navigation.navigate('BrandedScreen', {id})
    }

  render() {
    const { isModalOpen, searchState } = this.state;
    return (
      <View
        style={{
          marginTop: 20
        }}
      >
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
          <Button
            title="Filters"
            titleStyle={{ color: "#003366" }}
            containerStyle={{ width: 100, alignSelf: "flex-end" }}
            type="outline"
            onPress={this.toggleModal}
            icon={{
              name: "filter-vintage",
              size: 20,
              color: "grey"
            }}
            raised
          />
          <Text>{"\n"}</Text>
          <InfiniteHits onMednamePress={this.navigateToMedDetails}/>
        </InstantSearch>
      </View>
    );
  }
}

export default TsScreen;
