import React, { Component } from 'react';
import { AppRegistry, Image, StatusBar, View, StyleSheet,  Text,  TouchableOpacity, ScrollView} from 'react-native';
import { Container, Content, List, ListItem, Button } from "native-base";
import { Actions } from 'react-native-router-flux';

import PhotoGrid from '../../PhotoGrid.js';
//const data = {"id":1, "name":"NGO1", "address":"1 NGO Address", "tel":21249201, "mob":99887766, "email":"NGO.email1@gmail.com", "img":"../../../assets/Profiles/boy1.png"};
const data = {"id":5, "company": 0, "companyName": "Vodafone", "name":"Luke", "surname":"Abela", "idNum":"96232M", "fund":58,  "hours":15, "img":"male1.png"};

export default class Profile extends Component {
  render() {
    const fullName = data.name + " " + data.surname;
    const funds = "Money Invested: Euro " + data.fund;
    const timeSpent = "Time Invested: " + data.hours + " Hours";
    const companyName = data.companyName;
    const companyID = data.company;
    return (
      <ScrollView>
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={require("../../../assets/Profiles/male1.png")}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{fullName}</Text>
              <Text style={styles.funds}>{funds}</Text>
              <Text style={styles.funds}>{timeSpent}</Text>
              <Text style={styles.info}
                onPress={() => Actions.CompanyProfile({id:companyID})}>
              {companyName}</Text>
              <View style = {styles.container}>
                <PhotoGrid />
              </View>
            </View>
        </View>
        <Button primary block style={{margin:10,borderRadius:10,height:50}} onPress={() => Actions.PeopleInvested()}><Text style={{color: 'white'}}> Projects invested in </Text></Button>
      </View>
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
