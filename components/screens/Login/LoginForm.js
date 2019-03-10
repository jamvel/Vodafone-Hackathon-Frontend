import React, {Component} from 'react';
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, StatusBar, Alert} from 'react-native';
import { Button } from "native-base";
import { Actions } from 'react-native-router-flux';
import { showMessage, hideMessage } from "react-native-flash-message";

export default class LoginForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      un : "",
      ps :"",
    };
  }
  goToHome = () => {
    if(this.state.un != undefined && this.state.ps != undefined && this.state.un != "" && this.state.ps != ""){
      if(this.state.un == "demo" && this.state.ps == "pass"){
        Actions.HomeScreen();
      }else{
        Alert.alert("Error!", "Incorrect Credentials!",[{text: 'OK'}], {cancelable: false})
      }
    }else{
      Alert.alert("Error!", "Please enter your credentials!",[{text: 'OK'}], {cancelable: false})
    }
  }

  render(){
    return(
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
		  <View style={styles.container}>
      <StatusBar barStyle="light-content"/>
        <TextInput placeholder="username or email" placeholderTextColor="rgba(255,255,255,0.7)" returnKeyType="next" onSubmitEditting={()=>this.passwordInput.focus()}
          keyboard="email-address" autoCapitalize="none" autoCorrect={false} style={styles.input}
          onChangeText={(un) => this.setState({un})}
          value={this.state.un}
          />
        <TextInput placeholder="password" placeholderTextColor="rgba(255,255,255,0.7)" returnKeyType="go" secureTextEntry style={styles.input}
          ref={(input)=>this.passwordInput = input}
          onChangeText={(ps) => this.setState({ps})}
          value={this.state.ps}
          />
        <Button primary block style={{margin:10,borderRadius:10,height:50}} onPress={this.goToHome}><Text style={{color: 'white'}}> Login </Text></Button>
      </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  input:{
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 10,
    borderRadius: 10,
    color: '#FFF',
    paddingHorizontal: 10
  },
  buttonContainer:{
    backgroundColor: '#2980b9',
    paddingVertical: 10
  },
  buttonText:{
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  }
});
