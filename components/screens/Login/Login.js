import React, {Component} from 'react';
import { StyleSheet, View, Image, Text, BackHandler } from 'react-native';
import LoginForm from './LoginForm'

export default class Login extends Component{
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton() {
    return true;
  }

  render(){
    return(
		<View
      style={styles.container}>
			<View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../../assets/Fire.png')}/>
        <Text style={styles.title}>reKindle</Text>
			</View>
			<View style={styles.formContainer}>
        <LoginForm />
			</View>
      </View>
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
