import React, {Component} from 'react';
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, StatusBar} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class LoginForm extends Component{
  render(){
    return(
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
		  <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
      />
          <TextInput
          placeholder="username or email"
          placeholderTextColor="rgba(255,255,255,0.7)"
          returnKeyType="next"
          onSubmitEditting={()=>this.passwordInput.focus()}
          keyboard="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          />
        <TextInput
          placeholder="password"
          placeholderTextColor="rgba(255,255,255,0.7)"
          returnKeyType="go"
          secureTextEntry
          style={styles.input}
          ref={(input)=>this.passwordInput = input}
          />

          <TouchableOpacity style={styles.buttonContainer}>
            <Text
              style={styles.buttonText}
              onPress={() => Actions.HomeScreen()}
            >
            LOGIN
            </Text>
          </TouchableOpacity>
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
