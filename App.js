import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from "./styles/global.scss";

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

let storybook = false;
export default (__DEV__ && storybook) ? require('./storybook').default : App;
