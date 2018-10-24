import React, {Component} from 'react';
import {Text, View,StyleSheet,ImageBackground,Image,TextInput} from 'react-native';
import BackgroundImage from './backgroundImg';

export default class TestBackgroundImage extends Component {
    render() {
        
        return (
     
    //   <ImageBackground style={styles.backgroundImage} source={require('../a.png')}>
    //   <Text style={{color:"white",fontSize:20,justifyContent:'center',alignItems:'center',height:'100%',flex:1}}>Penchal</Text>
    //   </ImageBackground>

      <ImageBackground style={styles.backgroundImage}
      source={require('../a.png')}
      
   
    >
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
<TextInput style={{backgroundColor:'red',width:210}}/>
        
      </View>
    </ImageBackground>
          
             
    
   
         
         
  
       
        ) 
    }
}

const styles = StyleSheet.create({   
    text: {
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 32
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position:'absolute'
        
    }
});