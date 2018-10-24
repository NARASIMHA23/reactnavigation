import React, { Component } from "react";
import { View, Text, TouchableOpacity, BackHandler, Alert } from "react-native";
import { Navigation } from "react-native-navigation";

class screen2 extends Component {
  pushthirdScreen = () => {
    // this.props.navigator.push({
    //   screen: "screen3",
    //   //   navigatorStyle: { navBarHidden: true },
    //   animated: true,
    //   animationType: "slide-horizontal"
    //   // overrideBackPress: true
    // });
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: "tab1",
          screen: "screen4",
          
          navigatorStyle: { 
          navBarHidden: true,
          },
          topTabs: [
            {
              screenId: "screen1",
              title: "Tab One",
              navigatorStyle: { 
                navBarHidden: true,
              navBarHeight: 10, // Optional, set the navBar height in pixels.
              navBarTopPadding: 4, // Optional, set navBar top padding in dp. Useful when StatusBar.translucent=true on Android Lollipop and above.
              topTabsHeight: 10, // Optional, set topTabs height in pixels.
              topBarBorderColor: 'blue', // Optional, set a flat border under the TopBar.
              topBarBorderWidth: 55.5, // Optional, set the width of the border.
            }
            },
            {
              screenId: "screen4",
              title: "Tab Two",
              navigatorStyle: {
                navBarHidden: true,
                navBarHeight: 70, // Optional, set the navBar height in pixels.
                navBarTopPadding: 24, // Optional, set navBar top padding in dp. Useful when StatusBar.translucent=true on Android Lollipop and above.
                topTabsHeight: 70, // Optional, set topTabs height in pixels.
                topBarBorderColor: 'blue', // Optional, set a flat border under the TopBar.
                topBarBorderWidth: 5.5, // Optional, set the width of the border.
            }
            }
          ],
          icon: require("../heart.png"),
          selectedIcon: require("../heart.png"),

          navigatorStyle: { 
            navBarHidden: true,
            navBarHeight: 50, // Optional, set the navBar height in pixels.
            navBarTopPadding: 17, // Optional, set navBar top padding in dp. Useful when StatusBar.translucent=true on Android Lollipop and above.
            topTabsHeight: 60, // Optional, set topTabs height in pixels.
            topBarBorderColor: 'blue', // Optional, set a flat border under the TopBar.
            topBarBorderWidth: 10.5, // Optional, set the width of the border.
          },
        },

        {
          title: "Tab2",
          label: "tab2",
          screen: "screen1",
          icon: require("../bp.png"),
          selectedIcon: require("../bp.png"),
          navigatorStyle: {}
        },
        {
          title: "Tab3",
          label: "tab3",
          screen: "screen2",
          icon: require("../rr.png"),
          selectedIcon: require("../rr.png"),
          navigatorStyle: {}
        }
      ],
      navigatorStyle: { 
        navBarHidden: true,
        },
      animated: true, 
      animationType: 'slide-horizontal',
      appStyle: {
        tabBarBackgroundColor: "#0f2362",
        tabBarButtonColor: "#ffffff",
        tabBarHideShadow: true,
        tabBarSelectedButtonColor: "#63d7cc",
        tabBarTranslucent: false,
        tabFontFamily: "Avenir-Medium", // existing font family name or asset file without extension which can be '.ttf' or '.otf' (searched only if '.ttf' asset not found)
        tabFontSize: 10,
        selectedTabFontSize: 12
      }
    });
  };

  pushTopTabsScreen = () => {
    this.props.navigator.push({
      screen: "screen1",

      topTabs: [
        {
          screenId: "screen1",
          title: "Tab One"
        },
        {
          screenId: "screen2",
          title: "Tab Two"
        }
      ]
    });
  };
  //   componentWillMount(){
  //     alert("Hi")
  // }

  render() {
    console.log("this props1", this.props);
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "grey"
        }}
      >
        <Text>this is second screen</Text>
        <View style={{ marginTop: 40 }}>
          <TouchableOpacity>
            <Text
              onPress={() => {
                this.pushthirdScreen();
              }}
            >
              click to third screen
            </Text>
            {/* // <Text onPress={()=>{
            //     this.pushTopTabsScreen();
           // }}>click for top tabs</Text>*/}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default screen2;
