import { Navigation } from "react-native-navigation";
import { registerScreens } from "../index";

registerScreens();

function moveNextScreen() {
  Navigation.startSingleScreenApp({
    screen: {
      screen: "screen2",
      animated: true,
      animationType: "slide-horizontal",
      navigatorStyle: { navBarHidden: true },
      passProps: { screen: "1" }
    }
  });
}

export default {
  moveNextScreen
};

// function moveNextScreen(data) {
//     data.navigator.push({
//         screen: 'screen2',
//         animated: true,
//         animationType: 'slide-horizontal',
//        navigatorStyle: { navBarHidden: true },
//        passProps: {screen:"1"}

//       });
//   }
