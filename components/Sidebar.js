import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";
import { Actions } from 'react-native-router-flux';
export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
                  <ListItem button onPress={() => Actions.Login()}>
                    <Text>Home</Text>
                  </ListItem>
                  <ListItem button onPress={() => Actions.Login()}>
                    <Text>Chat</Text>
                  </ListItem>
                  <ListItem button onPress={() => Actions.Profile()}>
                    <Text>Profile</Text>
                  </ListItem>
                  <ListItem button onPress={() => Actions.NGOProfile()}>
                    <Text>NGO Profile</Text>
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
