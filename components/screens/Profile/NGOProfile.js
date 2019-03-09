import React, { Component } from 'react';
import {
  Container,
  Content,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  List,
  ListItem,
  TextInput,
  AppRegistry
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class NGOProfile extends Component {
  render() {
    return (
         <View>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.header}></View>
                    <Image style={styles.avatar} source={require('../../../assets/Ngos/SJA.png')}/>
                    <View style={styles.body}>
                      <View style={styles.bodyContent}>
                        <Text style={styles.name}>John Doe</Text>
                        <Text style={styles.info}>UX Designer / Mobile developer</Text>
                        <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
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
  name:{
    fontSize:22,
    color:"#FFFFFF",
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
  title:{
    color: '#FFFFFF',
    marginTop: 10,
    width: 160,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '700',
    opacity: 0.5
  }
});
