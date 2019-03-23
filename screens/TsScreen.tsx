import * as React from "react";
import { Text, View } from "react-native";
import { SearchBar } from "react-native-elements";

export const TsScreen = () => (
  <View>
      <SearchBar
        placeholder="Type Here..."
      />
    <Text>This should work</Text>
  </View>
);
export default TsScreen;
