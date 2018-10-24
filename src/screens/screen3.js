import React, { Component } from "react";
import { View, Text } from "react-native";
import Screen4 from "./screen4";


class screen3 extends Component {

    constructor(props){
        super(props);

        this.state={
            Fname:'Penchal',
            Lname:'narasimhulu'
        }
    }
    pushfourthScreen = () => {
        this.props.navigator.push({
          screen: 'screen4',
        //   navigatorStyle: { navBarHidden: true },
        animated: true, 
        animationType: 'slide-horizontal'
        });
      };

  render() {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'yellow'}}>
        <Text>this is third screen</Text>
        <Text style={{marginTop:50}}
        onPress={() => {
            this.pushfourthScreen()
          }}
        >click to forth screen</Text>
      </View>
    );
  }
}
export default screen3;
