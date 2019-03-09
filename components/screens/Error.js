import React, { Component } from 'react';
import {Text,  View, StyleSheet} from 'react-native';
import {Button} from "native-base";
import { Actions } from 'react-native-router-flux';

export default class Error extends Component {
  render() {
    return (
        <View>
          <Text style={styles.name}>"Something Went Wrong When loading your data :( "</Text>
          <Button onPress={() => Actions.pop()}></Button>
        </View>

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
    fontWeight: "600",
    textAlign: 'left'
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10,
    textAlign: 'left'
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
  title:{
    color: '#FFFFFF',
    marginTop: 10,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '700'
  }
});
