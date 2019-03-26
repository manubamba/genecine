import * as React from 'react';
import { SearchBar } from 'react-native-elements';

export default (...props: React.ComponentProps<typeof SearchBar>[]) => (
  <SearchBar lightTheme={true} {...props} />
);
