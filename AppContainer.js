import * as Expo from "expo";
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import React, { Component } from "react";
import { View,  Platform } from 'react-native';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
import { Router, Scene } from 'react-native-router-flux';

import HomeScreen from "./components/screens/Homescreen.js";
import Login from "./components/screens/Login/Login.js";
import NGOProfile from "./components/screens/Profile/NGOProfile.js";
import NGOPages from "./components/screens/NGOPages.js";
import CompanyPages from "./components/screens/CompanyPages.js";
import CompanyProfile from "./components/screens/Profile/CompanyProfile.js";
import Profile from "./components/screens/Profile/Profile.js";
import PeopleInvested from "./components/screens/PeopleInvested.js";
import Error from "./components/screens/Error.js";

export default class AppContainer extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  componentWillMount() {
    this.loadFonts();
  }

  async loadFonts() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
      Entypo: require("native-base/Fonts/Entypo.ttf"),
      Feather: require("native-base/Fonts/Feather.ttf"),
      FontAwesome: require("native-base/Fonts/FontAwesome.ttf"),
      // MaterialIcons: require("native-base/Fonts/MaterialIcons.ttf"),
      // MaterialCommunityIcons: require("native-base/Fonts/MaterialCommunityIcons.ttf"),
      Octicons: require("native-base/Fonts/Octicons.ttf"),
      // Zocial: require("@expo/vector-icons/fonts/Zocial.šttf"),
      // SimpleLineIcons: require("native-base/Fonts/SimpleLineIcons.ttf"),
      // EvilIcons: require("native-base/Fonts/EvilIcons.ttf"),
      // ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <Router hideNavBar= "true">
        <Scene key="root" hideNavBar= "true">
          <Scene key="Login" component={Login} initial={true} />
          <Scene key="HomeScreen" component={HomeScreen} initial={false} type="reset"/>
          <Scene key="NGOProfile" component={NGOProfile} />
          <Scene key="NGOPages" component={NGOPages} />
          <Scene key="Profile" component={Profile} />
          <Scene key="PeopleInvested" component={PeopleInvested} />
          <Scene key="Error" component={Error} />
          <Scene key="CompanyPages" component={CompanyPages} />
          <Scene key="CompanyProfile" component={CompanyProfile} />
        </Scene>
      </Router>
    );
  }
}
