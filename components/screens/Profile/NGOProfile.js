//Alert.alert("Thank You!", "Thank you for donating some of your time.",
//[{text: 'Cancel'},{text: 'OK'}], {cancelable: false})

import React, { Component } from 'react';
import {  Container, Content, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, List, ListItem, TextInput, AppRegistry, Dimensions} from 'react-native';
import { Button, Icon } from "native-base";
import Modal from "react-native-modal";
import DatePicker from 'react-native-datepicker';
import { Actions } from 'react-native-router-flux';


const data = [{"id":1, "name":"Caritas", "website":"https://www.caritasmalta.org/" ,"address":"Caritas Malta, 5, Lion Street, Floriana, FRN1514", "contact":25906600, "email":"info@caritasmalta.org","category":["Reformation", "Drug Addiction"], "img":"CARITAS.png"},
{"id":2, "name":"Make a Wish Foundation", "website":"https://www.worldwish.org/en" , "address":"Make-A-Wish International 1702 E Highland Ave, Suite 305 Phoenix, Arizona 85016 USA", "contact":"1 602.230.9900", "email":"international@worldwish.org","category":["Children", "Illness"], "img":"MAW.png"},
{"id":3, "name":"Richmond Foundation", "website":"https://www.caritasmalta.org/" , "address":"424, St. Joseph High Road, St. Venera, SVR 1013", "contact":21224580, "email":"info@richmond.org.mt","category":["Mental Health"], "img":"Richmond.png"},
{"id":4, "name":"St. Jeanne Antide Foundation", "website":"https://www.antidemalta.org/" , "address":"51, Tarxien Road, Tarxien TXN 1090", "contact":21809011, "email":"macen.sjaf@gmail.com","category":["Domestic Violence", "Social Work", "Mental Health"], "img":"SJA.png"},
{"id":5, "name":"SOS Malta", "website":"http://www.sosmalta.org/" , "address":"10, Triq il-Ward, Santa Venera, SVR 1640", "contact":21244123, "email":"info@sosmalta.org ","category":["Solidarity"], "img":"SOS.png"}];

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
        imgPath = require('../../../assets/Ngos/CARITAS.png');
        break;
      case 1:
        imgPath = require('../../../assets/Ngos/MAW.png');
        break;
      case 2:
        imgPath = require('../../../assets/Ngos/Richmond.png');
        break;
      case 3:
        imgPath = require('../../../assets/Ngos/SJA.png');
        break;
      case 4:
        imgPath = require('../../../assets/Ngos/SOS.png');
        break;
      default:
        imgPath = require('../../../assets/Ngos/SJA.png');
    }
  }

  state = {
    isModalVisibleTime: false,
    isModalVisibleMoney: false,
  }

  _toggleModalTime = () =>
     this.setState({ isModalVisibleTime: !this.state.isModalVisibleTime });

   _toggleModalMoney = () =>
      this.setState({ isModalVisibleMoney: !this.state.isModalVisibleMoney });

  render() {
    var category = "";
    data[this.props.id].category.forEach(function(cat){(category == "")? category = cat : category = category + " || " + cat;});
    const address = "Address: " + data[this.props.id].address;
    const contact = "Contact Number: " + data[this.props.id].contact;
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
                        <Text style={styles.description}>{contact}</Text>
                        <Text style={styles.description}>{email}</Text>
                        <Button primary block style={{margin:10,borderRadius:10,height:50}} onPress={this._toggleModalTime}><Text style={{color: 'white'}}> Donate Time </Text></Button>
                        <Button primary block style={{margin:10,borderRadius:10,height:50}} onPress={this._toggleModalMoney}><Text style={{color: 'white'}}> Donate Money </Text></Button>
                        <Modal
                          animationType="slide"
                          transparent={false}
                          isVisible={this.state.isModalVisibleTime}>
                          <View style={{marginTop: 22, alignItems: 'center', padding:30}}>
                            <Text style={styles.title}>Donate Time <Icon name='clock' style={{marginRight:5,color:"#3498db",fontSize:34}}/></Text>
                            <TextInput icon="clock" placeholder="Amount in Hours" placeholderTextColor="rgba(255,255,255,0.7)" returnKeyType="next" keyboardType="numeric" style={styles.input}/>
                            <DatePicker style={{width: 200}} date={this.state.date} mode="date" placeholder="select date" format="YYYY-MM-DD"
                                minDate={this.state.date} maxDate="2050-12-31" confirmBtnText="Confirm" cancelBtnText="Cancel"
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
                                }}
                                onDateChange={(date) => {this.setState({date: date})}}
                              />

                            <Button primary block style={{margin:10,borderRadius:10,height:50}} onPress={this._toggleModalTime}><Text style={{color: 'white'}}> Submit </Text></Button>
                            <Button primary block style={{margin:10,borderRadius:10,height:50}} onPress={this._toggleModalTime}><Text style={{color: 'white'}}> Cancel </Text></Button>

                          </View>
                        </Modal>
                        <Modal
                          animationType="slide"
                          transparent={false}
                          isVisible={this.state.isModalVisibleMoney}>
                          <View style={{marginTop: 22, alignItems: 'center', padding:30}}>
                            <Text style={styles.title}>Donate Money</Text>
                            <TextInput icon="icon-clock" placeholder="Amount in Euro" placeholderTextColor="rgba(255,255,255,0.7)" returnKeyType="next" keyboardType="numeric" style={styles.input}/>
                            <Button primary block style={{margin:10,borderRadius:10,height:50}} onPress={this._toggleModalMoney}><Text style={{color: 'white'}}> Submit </Text></Button>
                            <Button primary block style={{margin:10,borderRadius:10,height:50}} onPress={this._toggleModalMoney}><Text style={{color: 'white'}}> Cancel </Text></Button>
                          </View>
                        </Modal>

                        <Button primary block style={{margin:10,borderRadius:10,height:50}} onPress={() => Actions.HomeScreen({id:data[this.props.id].id})}><Text style={{color: 'white'}}> Active Requests </Text></Button>
                      </View>
                  </View>
                </View>
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
  },
  input:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:'#FFFFFF',
    borderWidth: 1,
    margin: 5,
    height: 40,
    width: (Dimensions.get('window').width / 2) - 4
  }
});
