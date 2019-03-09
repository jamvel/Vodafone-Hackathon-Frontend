import React, {Component} from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default class Login extends Component{
  render(){
    return(
        <Text style={styles.title}>reKindle</Text>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db'
  },
  logoContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo:{
    width: 125,
    height: 170
  },
  title:{
    color: '#FFFFFF',
    marginTop: 10,
    textAlign: 'center',
    fontSize: 44,
    fontWeight: 'bold',
    opacity: 0.5
  }
});
