import { Navigation } from "react-native-navigation";
import { registerScreens } from "../index";
import React, {Component} from 'react';
import {Text, View} from 'react-native';


registerScreens();

export default class screen5 extends Component {
componentDidMount(){
    Navigation.startTabBasedApp({
        
        screen: 'screen1',
       
        topTabs: [{
          screenId: 'screen1',
          title: 'Tab One',
        }, {
          screenId: 'screen2',
          title: 'Tab Two',
        }],
    });
}
  render() {
     
    return (
    <View/>
    );
  }
}


