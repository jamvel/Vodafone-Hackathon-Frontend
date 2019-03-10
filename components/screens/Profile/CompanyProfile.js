import React, { Component } from 'react';
import {Container, Content, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, List, ListItem, TextInput, AppRegistry} from 'react-native';
import { Actions } from 'react-native-router-flux';
import PhotoGridCompany from '../../PhotoGridCompany.js';

const data = [
  {"id":1, "name":"Vodafone", "address":"Malta International Airport (Arrivals), Ħal Luqa LQA 4000", "sponsorScheme":"With every Red Plan we will add Euro 3 to your balance", "contact":99999247, "email":"info@vodafone.com", "employeeHours":200, "startDate":"2018-04-25", "img":"Vodafone.png"},
  {"id":2, "name":"Office of the Prime Minister", "address":"Auberge de Castille", "sponsorScheme":"Euro 1 tax rebate to your balance", "contact":99999247, "email":"info@opm.com", "employeeHours":50, "startDate":"2018-06-24", "img":"OPM.png"},
  {"id":3, "name":"The Malta Police Force", "address":"The Malta Police Force, Police General Headquarters, Pjazza San Kalcidonju, Floriana FRN 1530", "sponsorScheme":"N/A", "contact":21224001, "email":"pulizija@gov.mt", "employeeHours":37, "startDate":"2018-02-24", "img":"Police.png"},
  {"id":4, "name":"Civil Protection Department Malta", "address":"Ministry for Home Affairs and National Security, 201, Strait Street, Valletta VLT 1433", "sponsorScheme":"N/A", "contact":25689000, "email":"homeaffairs@gov.mt", "employeeHours":157, "startDate":"2018-01-10", "img":"CPD.png"},
  {"id":5, "name":"University Of Malta", "address":"University of Malta, Msida MSD 2080, Malta", "sponsorScheme":"Euro 2 in your balance for teaching during Extra Curricular activities", "contact":23402340, "email":"info@um.edu.mt", "employeeHours":30, "startDate":"2018-03-12", "img":"UOM.png"}
];

var errorFound = false;
var imgPath = '../../../assets/Companies/Vodafone.png';

export default class CompanyProfile extends Component {
  constructor(props){
    super(props);
    this.state = {}
    switch (this.props.id) {
      case 0:
        imgPath = require('../../../assets/Companies/Vodafone.png');
        break;
      case 1:
        imgPath = require('../../../assets/Companies/OPM.png');
        break;
      case 2:
        imgPath = require('../../../assets/Companies/Police.png');
        break;
      case 3:
        imgPath = require('../../../assets/Companies/CPD.png');
        break;
      case 4:
        imgPath = require('../../../assets/Companies/UOM.png');
        break;
      default:
        imgPath = require('../../../assets/Companies/Vodafone.png');
    }
  }


  render() {
    const employeeHours = "Total Employee Hours Accumulated: " + data[this.props.id].employeeHours;
    const address = "Address: " + data[this.props.id].address;
    const mob = "Contact Number: " + data[this.props.id].contact;
    const email = "Email: " + data[this.props.id].email;
    const startDate = "Start Date: " + data[this.props.id].startDate;
    const sponsorScheme = "Sponsor Scheme: " + data[this.props.id].sponsorScheme;


    errorFound = (this.props.id > data.length)? true: false;
    if(errorFound){
      Actions.Error();
    }
    return (
         <View>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.header}></View>
                    <Image style={styles.avatar} source={imgPath}/>
                    <View style={styles.body}>
                      <View style={styles.bodyContent}>
                        <Text style={styles.name}>{data[this.props.id].name}</Text>
                        <Text style={styles.info}>{employeeHours}</Text>
                        <Text style={styles.description}>{address}</Text>
                        <Text style={styles.description}>{mob}</Text>
                        <Text style={styles.description}>{email}</Text>
                        <Text style={styles.description}>{sponsorScheme}</Text>
                        <Text style={styles.description}>{startDate}</Text>
                      </View>
                  </View>
                </View>

                <PhotoGridCompany />
            </ScrollView>
         </View>
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
    fontWeight: "600",
    textAlign: 'left'
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10,
    textAlign: 'left',
    fontWeight:'600'
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
  title:{
    color: '#FFFFFF',
    marginTop: 10,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '700'
  }
});
