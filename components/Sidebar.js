import React from "react";
import { AppRegistry, Image, StatusBar, View , StyleSheet} from "react-native";
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
            <ListItem button onPress={() => Actions.HomeScreen()} style={styles.listItem}>
              <Text style={styles.listItemText}>Home</Text>
            </ListItem>
            <ListItem button onPress={() => Actions.Profile()} style={styles.listItem}>
              <Text style={styles.listItemText}>My Profile</Text>
            </ListItem>
            <ListItem button onPress={() => Actions.NGOPages()} style={styles.listItem}>
              <Text style={styles.listItemText} >NGOs Involved</Text>
            </ListItem>
            <ListItem button onPress={() => Actions.CompanyPages()} style={styles.listItem}>
              <Text style={styles.listItemText} >Companies Involved</Text>
            </ListItem>
            <ListItem button onPress={() => Actions.Badges()}  style={styles.listItem}>
              <Text>All Possible Badges - User</Text>
            </ListItem>
            <ListItem button onPress={() => Actions.Trophies()}  style={styles.listItem}>
              <Text>All Possible Trophies - Company</Text>
            </ListItem>
            <ListItem button onPress={() => Actions.Login()}  style={styles.listItem}>
              <Text>Log Out</Text>

            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    paddingVertical:20
  },
  listItemText: {
    fontSize:18
  }
});
