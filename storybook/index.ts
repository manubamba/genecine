import * as React from 'react';
import { AppRegistry } from 'react-native';
import { configure, getStorybookUI } from '@storybook/react-native';
import { loadStories } from './storyLoader';
import './rn-addons';

// import stories
configure(loadStories, module);

// Refer to https://github.com/storybooks/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
// const StorybookUIRoot = getStorybookUI({});

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you can safely remove this line.
// AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);

// export default StorybookUIRoot;

// Refer to https://github.com/storybooks/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({ port: 7007, onDeviceUI: true });

// react-native hot module loader must take in a Class - https://github.com/facebook/react-native/issues/10991
// https://github.com/storybooks/storybook/issues/2081
// eslint-disable-next-line react/prefer-stateless-function
class StorybookUIHMRRoot extends React.Component {
  render() {
    return <StorybookUIRoot />;
  }
}

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you can safely remove this line.
// AppRegistry.registerComponent("ExportPro", () => StorybookUIRoot);

export default StorybookUIHMRRoot;
