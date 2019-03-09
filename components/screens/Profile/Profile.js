import React, { Component } from 'react';
import { AppRegistry, Image, StatusBar, View, StyleSheet,  Text,  TouchableOpacity, ScrollView} from 'react-native';
import { Container, Content, List, ListItem } from "native-base";
import { Actions } from 'react-native-router-flux';

import PhotoGrid from '../../PhotoGrid.js';
//const data = {"id":1, "name":"NGO1", "address":"1 NGO Address", "tel":21249201, "mob":99887766, "email":"NGO.email1@gmail.com", "img":"../../../assets/Profiles/boy1.png"};
const data = {"id":1, "company": 4, "companyName":"Vodafone Malta", "name":"John", "surname":"Doe", "idNum":"121396M", "fund":3.65, "time": 5, "img":"female1.png"};

export default class Profile extends Component {
  render() {
    const fullName = data.name + " " + data.surname;
    const funds = "Money Invested: #" + data.fund;
    const time = "Time Invested: " + data.time + " hours";
    const companyName = data.companyName;
    const companyID = data.company;
    return (
      <ScrollView>
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={require("../../../assets/Profiles/female1.png")}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{fullName}</Text>
              <Text style={styles.funds}>{funds}</Text>
              <Text style={styles.funds}>{time}</Text>
              <Text style={styles.info}
                onPress={() => Actions.CompanyProfile({id:companyID})}>
              {companyName}</Text>
              <View style = {styles.container}>
                <PhotoGrid />
              </View>
            </View>
        </View>
      </View>
          <List>
            <ListItem button onPress={() => Actions.PeopleInvested()}>
              <Text>Projects invested in</Text>
            </ListItem>
          </List>
        </ScrollView>
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
  funds:{
    fontSize:22,
    color:"#696968",
    fontWeight:'600',
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
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
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
  container:{
    flex: 1,
    backgroundColor: "#FFFFFF"
  }
});
