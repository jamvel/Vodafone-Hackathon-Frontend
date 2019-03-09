import React, { Component } from 'react';
import {  Container, Content, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, List, ListItem, TextInput, AppRegistry} from 'react-native';
import DatePicker from 'react-native-datepicker'
import { Actions } from 'react-native-router-flux';

const data = [{"id":0, "name":"NGO0", "address":"0 NGO Address", "tel":21249200, "mob":99887765, "email":"NGO.email0@gmail.com","category":["Children", "Elderly", "Companionship"], "img":"SJA.png"},
 {"id":1, "name":"NGO1", "address":"1 NGO Address", "tel":21249201, "mob":99887766, "email":"NGO.email1@gmail.com","category":["Children", "Elderly", "Companionship"], "img":"CARITAS.png"},
 {"id":2, "name":"NGO2", "address":"2 NGO Address", "tel":21249202, "mob":99887767, "email":"NGO.email2@gmail.com","category":["Children", "Elderly", "Companionship"], "img":"MAW.png"},
 {"id":4, "name":"NGO4", "address":"4 NGO Address", "tel":21249204, "mob":99887769, "email":"NGO.email4@gmail.com","category":["Children", "Elderly", "Companionship"], "img":"Richmond.png"},
 {"id":3, "name":"NGO3", "address":"3 NGO Address", "tel":21249203, "mob":99887768, "email":"NGO.email3@gmail.com","category":["Children", "Elderly", "Companionship"], "img":"SOS.png"},
 {"id":5, "name":"NGO5", "address":"5 NGO Address", "tel":21249205, "mob":99887760, "email":"NGO.email5@gmail.com","category":["Children", "Elderly", "Companionship"] ,"img":"SJA.png"}]
var errorFound = false;
var imgPath = '../../../assets/Ngos/MAW.png';

export default class NGOProfile extends Component {
  constructor(props){
    super(props);
    const currentDate = new Date()
    this.state = {
      date:currentDate.getFullYear().toString()+"-"+currentDate.getMonth().toString()+"-"+currentDate.getDay().toString()
    }
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
    var category = "";
    //data[this.props.id].category.forEach((cat)=>{ category = category + " || " + cat});
    console.log(data[this.props.id].category);
    data[this.props.id].category.forEach(function(cat){(category == "")? category = cat : category = category + " || " + cat;});
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

                <Text style={styles.title}>Active Requests</Text>



                <Text style={styles.title}>Donate Time</Text>
                <TextInput
                placeholder="amount in hours"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="next"
                keyboardType="numeric"

                style={styles.input}
                />
                <DatePicker
                        style={{width: 200}}
                        date={this.state.date}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        minDate={this.state.date}
                        maxDate="2050-12-31"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                          dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                          },
                          dateInput: {
                            marginLeft: 36
                          }
                          // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(date) => {this.setState({date: date})}}
                      />

                <TouchableOpacity style={styles.buttonContainer}>
                  <Text>Submit</Text>
                </TouchableOpacity>
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
