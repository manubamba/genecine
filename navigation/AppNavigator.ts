import MainTabNavigator, { HomeStack } from './MainTabNavigator';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';


export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
    Old: MainTabNavigator
  })
);
