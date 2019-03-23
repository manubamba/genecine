import * as React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TsScreen from '../screens/TsScreen';
import TabBarIcon from '../components/TabBarIcon';

export const HomeStack = createStackNavigator({
  Home: TsScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }: {focused: boolean}) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};


export default createBottomTabNavigator({
  HomeStack,
});
