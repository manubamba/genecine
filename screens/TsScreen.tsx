import * as React from 'react';
import SearchBox from '../components/SearchBox';
import { Text, View } from 'react-native';

export const TsScreen = () => (
  <View>
    <SearchBox placeholder="Type Here..." />
    <Text>This should work</Text>
  </View>
);
export default TsScreen;
