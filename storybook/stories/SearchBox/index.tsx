import * as React from 'react';
import SearchBox from '../../../components/SearchBox';
import { storiesOf } from '@storybook/react-native';

storiesOf('SearchBox', module).add('simple', () => (
  <SearchBox
    placeholder="Enter Text..."
    onChangeText={() => console.log('text-change')}
  />
));
