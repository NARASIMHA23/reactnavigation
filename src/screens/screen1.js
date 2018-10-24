import React,{Component} from 'react';
import {View,Text,TouchableOpacity,BackHandler,Alert,NativeModules} from 'react-native';
import { Navigation } from "react-native-navigation";
import I18n from 'react-native-i18n';
// import Login from '../components/login';
import { registerScreens } from "../index";
import {strings} from './local';
import {navigationApi} from '../navigateindex';

registerScreens();




class screen1 extends Component{
    // constructor(props){
    //     super(props);

    //     this.state={
    //        screen:"0"
    //     }
    // }

   


      LanguageToItalian() {
        strings.setLanguage('it');
        this.setState({});
      }
//       componentDidMount() {
//         BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
//       }
    
//       componentWillUnmount() {
//         BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
//       }
    
//     //   handleBackPress = () => {
//     //       alert("are you sure want to go back ")
//     //    this.goBack(); // works best when the goBack is async
//     //     return true;
//     //   }

//       handleBackPress = () => {
//     Alert.alert(
//       'Confirm exit',
//       'Do you want to quit the app?'
//       [
//         {text: 'CANCEL', style: 'cancel'},
//         {text: 'OK', onPress: () => BackHandler.exitApp()}
//       ]
//     );

//   };
// componentWillMount(){
//     alert("Hi")
// }

// componentDidMount() {
//     BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
//   }
//   componentWillUnmount() {
//     BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
//   }

  
// onButtonPress = () => {
//     BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
//     // then navigate

//   }
  
//   handleBackButton = () => {
//       console.log("this props23232",this.props)
//       const {testID}=this.props;
//       if(testID==='screen2'){
//           alert("Minimises the App");
//         // NativeModules.BackPressOverrideAndroid.moveTaskToBack(() => {}, () => {});
//         return false;
//       }else{
//         Alert.alert(
//             'Exit App',
//             'Exiting the application?', [{
//                 text: 'Cancel',
//                 onPress: () => console.log('Cancel Pressed'),
//                 style: 'cancel'
//             }, {
//                 text: 'OK',
//                 onPress: () => BackHandler.exitApp()
//             }, ], {
//                 cancelable: false
//             }
//          )
//         }

//     return true;
//   } 
  


    render(){
        console.log("this navigator",navigationApi)
        const {navigatorUtils}=navigationApi
     const {moveNextScreen}=navigatorUtils;
        console.log("props>>>>>.",this.props)
        return(
         <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
         <Text>Welcome {I18n.t("greeting")} Penchal</Text>
         <View><Text>{strings.how}</Text></View>
         <View  style={{marginTop:50,backgroundColor:'green',height:36,width:88}}>
         <TouchableOpacity>
         <Text style={{fontSize:20}}
         onPress={() => {
            moveNextScreen()
          }}
            >Click Me</Text>
         </TouchableOpacity>
         </View>
         
         </View>
        )
    }
}



I18n.fallbacks=true;

I18n.translations={


   
    it:{
        greeting:'Hola'
    },
    fil:{
        greeting:'Benjor'
    },
    en:{
        greeting:'Hello'
    },
}



export default screen1;