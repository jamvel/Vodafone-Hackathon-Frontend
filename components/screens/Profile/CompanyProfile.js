import React, { Component } from 'react';
import {Container, Content, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, List, ListItem, TextInput, AppRegistry} from 'react-native';
import { Actions } from 'react-native-router-flux';
import PhotoGridCompany from '../../PhotoGridCompany.js';

const data = [
    {"id":1, "name":"Company1", "address":"1 Company Address", "tel":21249201, "mob":99887766, "email":"company.email1@gmail.com", "img":"male1.png", employeeHours:50},
    {"id":2, "name":"Company2", "address":"2 Company Address", "tel":21249202, "mob":99887767, "email":"company.email2@gmail.com", "img":"girl1.png", employeeHours:50},
    {"id":3, "name":"Company3", "address":"3 Company Address", "tel":21249203, "mob":99887768, "email":"company.email3@gmail.com", "img":"female1.png", employeeHours:50},
    {"id":4, "name":"Company4", "address":"4 Company Address", "tel":21249204, "mob":99887769, "email":"company.email4@gmail.com", "img":"boy1.png", employeeHours:50},
    {"id":5, "name":"Company5", "address":"5 Company Address", "tel":21249205, "mob":99887760, "email":"company.email5@gmail.com", "img":"girl1.png", employeeHours:50}
  ];

var errorFound = false;
var imgPath = '../../../assets/Ngos/MAW.png';

export default class NGOProfile extends Component {
  constructor(props){
    super(props);
    this.state = {}
    switch (this.props.id) {
      case 0:
        imgPath = require('../../../assets/Ngos/SJA.png');
        break;
      case 1:
        imgPath = require('../../../assets/Ngos/CARITAS.png');
        break;
      case 2:
        imgPath = require('../../../assets/Ngos/MAW.png');
        break;
      case 3:
        imgPath = require('../../../assets/Ngos/Richmond.png');
        break;
      case 4:
        imgPath = require('../../../assets/Ngos/SOS.png');
        break;
      default:
        imgPath = require('../../../assets/Ngos/SJA.png');
    }
  }


  render() {
    const category = "Total Employee Hours Accumulated: " + data[this.props.id].employeeHours;
    const address = "Address: " + data[this.props.id].address;
    const tel = "Telephone: " + data[this.props.id].tel;
    const mob = "Mobile: " + data[this.props.id].mob;
    const email = "Email: " + data[this.props.id].email;


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
                        <Text style={styles.info}>{category}</Text>
                        <Text style={styles.description}>{address}</Text>
                        <Text style={styles.description}>{tel}</Text>
                        <Text style={styles.description}>{mob}</Text>
                        <Text style={styles.description}>{email}</Text>
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
    textAlign: 'left'
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
