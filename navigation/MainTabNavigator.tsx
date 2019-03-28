import * as React from 'react';
import BrandedMedScreen from '../screens/BrandedMedScreen';
import Storybook from '../storybook';
import TabBarIcon from '../components/TabBarIcon';
import TsScreen from '../screens/TsScreen';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Platform } from 'react-native';

export const HomeStack = createStackNavigator({
  Home: TsScreen
});
export const StorybookStack = createStackNavigator({
  Home: Storybook
});
export const BrandedScreen = createStackNavigator({
  Home: BrandedMedScreen
});


HomeStack.navigationOptions = {
  tabBarIcon: ({ focused }: { focused: boolean }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
  header: null
};

export default createStackNavigator({
  HomeStack,
  BrandedScreen,
});
