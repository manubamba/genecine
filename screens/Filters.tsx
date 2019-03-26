import * as React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Modal,
  Text,
  TouchableOpacity
} from "react-native";
import { InstantSearch } from "react-instantsearch-native";
import RefinementList from "./RefinementList";

const styles = StyleSheet.create({
  closeButton: {
    alignItems: "center",
    marginTop: 20
  },
  closeButtonText: {
    fontSize: 18
  }
});

interface FiltersProps {
  isModalOpen: boolean;
  searchState: any;
  searchClient: any;
  toggleModal: () => void;
  onSearchStateChange: (searchState : any) => void;
}

const Filters = ({
  isModalOpen,
  searchState,
  searchClient,
  toggleModal,
  onSearchStateChange
}: FiltersProps) => (
  <Modal animationType="slide" visible={isModalOpen} onRequestClose={()=>{}}>
    <SafeAreaView>
      <InstantSearch
        searchClient={searchClient}
        indexName="dev_brandedMeds"
        searchState={searchState}
        onSearchStateChange={onSearchStateChange}
      >
        <RefinementList attribute="category" />
        <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </InstantSearch>
    </SafeAreaView>
  </Modal>
);

export default Filters;
