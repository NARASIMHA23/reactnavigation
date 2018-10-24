import React, {Component} from 'react';
import {Text, View} from 'react-native';




export default class screen4 extends Component {

    pushfirstScreen = () => {
        this.props.navigator.push({
          screen: 'screen3',
        animationType: 'side'
       
        });
      };
  render() {
      console.log("props>>>>>",this.props);
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'pink'}} >
      <Text>this is fourth screen</Text>
      <Text style={{marginTop:50}}
      onPress={() => {
        this.pushfirstScreen()
      }}
      >click to fifth screen</Text>
        </View>
    );
  }
}


