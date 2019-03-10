import React, { Component } from 'react';
import { AppRegistry, Image, StatusBar, View, StyleSheet,  Text,  TouchableOpacity, ScrollView} from 'react-native';
import { Container, Content, List, ListItem, Button } from "native-base";
import { Actions } from 'react-native-router-flux';

import PhotoGridCompany from '../PhotoGridCompany.js';

export default class Trophies extends Component {
  render() {
    return (
      <ScrollView>
      <View style = {styles.container}>
        <PhotoGridCompany />
      </View>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  funds:{
    fontSize:22,
    color:"#696968",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  container:{
    flex: 1,
    backgroundColor: "#FFFFFF"
  }
});
