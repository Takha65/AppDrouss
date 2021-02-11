import React from 'react'
import {StyleSheet, View,Button,TextInput,Text } from 'react-native'

class Test extends React.Component{
    render(){
      // la fonction render permet de rendre un element graphique
      // elle est obligatoire pour ca
      return(
         <View style={{backgroundColor:'black',flex:1,flexDirection:'column'}}>
         <View style={{backgroundColor:'green',flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
         <View style={{backgroundColor:'white',height:50,width:50}}></View>
         <View style={{backgroundColor:'black',height:50,width:50}}></View>
         </View>
         <View style={{backgroundColor:'yellow',flex:1}}></View>
         </View>
      )
    }
  }

const styles =StyleSheet.create({
  textInput:{marginLeft:5,
    marginRight:5,
    height:50,
    borderColor:'#000',
    borderWidth:1,
    paddingLeft:5},
    button :{
      backgroundColor:'red',
      height:300
    }
})

  export default Test
