import * as React from "react";
import { AppLoading, Font } from "expo";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import AppNavigator from "../navigation/AppNavigator";
import MaterialIcons from "@expo/vector-icons/fonts/MaterialIcons.ttf";

interface AppProps {
  skipLoadingScreen: boolean;
}

// export default ({ skipLoadingScreen }: AppProps) => {
//   const [isLoadingComplete, setLoadingComplete] = useState(false);
//   if (!isLoadingComplete && !skipLoadingScreen) {
//     return (
//       <AppLoading
//         startAsync={() => Promise.resolve()}
//         onError={() => Promise.resolve()}
//         onFinish={() => setLoadingComplete(true)}
//       />
//     );
//   } else {
//     return (
//       <View style={styles.container}>
//         {Platform.OS === "ios" && <StatusBar barStyle="default" />}
//         <AppNavigator />
//       </View>
//     );
//   }
// };

interface AppProps {
  skipLoadingScreen: boolean;
}
interface AppState {
  isLoadingComplete: boolean;
}

const _loadResourcesAsync = async () => {
  return Promise.all([
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      // We include SpaceMono because we use it in HomeScreen.js. Feel free
      // to remove this if you are not using it in your app
      "space-mono": require("../assets/fonts/SpaceMono-Regular.ttf"),
      MaterialIcons
    })
  ]).then(() => {});
};

export default class App extends React.PureComponent<AppProps, AppState> {
  state = {
    isLoadingComplete: false
  };
  onFinish = () => this.setState({ isLoadingComplete: true });
  render() {
    const { isLoadingComplete } = this.state;
    const { skipLoadingScreen } = this.props;
    if (!isLoadingComplete && !skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={_loadResourcesAsync}
          onError={() => Promise.resolve()}
          onFinish={this.onFinish}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === "ios" && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
