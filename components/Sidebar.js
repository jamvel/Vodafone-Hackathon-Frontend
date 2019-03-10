import React from "react";
import { AppRegistry, Image, StatusBar, View } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";
import { Actions } from 'react-native-router-flux';
export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <View style={{flex: 1, justifyContent: 'center',alignItems:'center'}}>
            <Image
              source={require('../assets/Fire.png')}
              style={{width: 125,height: 170,justifyContent:'center'}}
            />
          <Text style={{fontWeight:"bold",fontSize:32}}>reKindle</Text>
          </View>

          <List>
            <ListItem button onPress={() => Actions.HomeScreen()}>
              <Text>Home</Text>
            </ListItem>
            <ListItem button onPress={() => Actions.Profile()}>
              <Text>My Profile</Text>
            </ListItem>
            <ListItem button onPress={() => Actions.NGOPages()}>
              <Text>NGOs Involved</Text>
            </ListItem>
            <ListItem button onPress={() => Actions.CompanyPages()}>
              <Text>Companies Involved</Text>
            </ListItem>
            <ListItem button onPress={() => Actions.Badges()}>
              <Text>All Possible Badges - User</Text>
            </ListItem>
            <ListItem button onPress={() => Actions.Trophies()}>
              <Text>All Possible Trophies - Company</Text>
            </ListItem>
            <ListItem button onPress={() => Actions.Login()}>
              <Text>Log Out</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
