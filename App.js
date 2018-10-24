import { Navigation } from "react-native-navigation";
import { registerScreens } from "./src";

registerScreens();

Navigation.startSingleScreenApp({

  screen: {
    screen: "screen1",
    navigatorStyle: { navBarHidden: true },
   

  }, 
});
