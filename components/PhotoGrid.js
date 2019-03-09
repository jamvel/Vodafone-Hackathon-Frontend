import React from 'react';
import {  AppRegistry,  StyleSheet,  Dimensions,  View,  Image,  ScrollView, Text} from 'react-native';

//TODO apply component to photos (story mode) and to badges (User)
//const data = {"id":1, "company": 4, "name":"John", "surname":"Doe", "idNum":"121396M", "fund":3.65, "time": 5, "img":"female1.png"};

export default class PhotoGrid extends React.Component {
  render() {
    return (
        <View style = {styles.photoGrid}>
          <View style = {styles.photoWrap}>
            <Image style={styles.photoUnachieved} source={require("../assets/Badges/Ribbons/goldBadge.png")} />
            <View style={styles.overlay} />
            <Text> 15 more hours of Community Work to get badge </Text>
          </View>
          <View style = {styles.photoWrap}>
            <Image style={styles.photoUnachieved} source={require("../assets/Badges/Ribbons/silverBadge.png")} />
            <View style={styles.overlay} />
            <Text> 5 more hours of Community Work to get badge </Text>
          </View>
          <View style = {styles.photoWrap}>
            <Image style={styles.photo} source={require("../assets/Badges/Ribbons/bronzeBadge.png")} />
            <Text> Achieved at 5 hours of Community Work </Text>
          </View>
          <View style = {styles.photoWrap}>
            <Image style={styles.photoUnachieved} source={require("../assets/Badges/Shields/goldShield1.png")} />
            <View style={styles.overlay} />
            <Text> 16.65 more investments to get shield </Text>
          </View>
          <View style = {styles.photoWrap}>
            <Image style={styles.photoUnachieved} source={require("../assets/Badges/Shields/silverShield1.png")} />
            <View style={styles.overlay} />
            <Text> 6.65 more investments to get shield </Text>
          </View>
          <View style = {styles.photoWrap}>
            <Image style={styles.photoUnachieved} source={require("../assets/Badges/Shields/bronzeShield1.png")} />
            <Text> 1.65 more investments to get shield </Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  photoGrid:{
    flexDirection:'row',
    flexWrap: 'wrap'
  },
  photoWrap:{
    margin:2,
    height: 200,
    width: (Dimensions.get('window').width / 4) - 4,
    paddingHorizontal: 5,
    paddingVertical: 5
  },
  photoUnachieved:{
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    backgroundColor: '#282828',
    borderRadius: 10
  },
  photo:{
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    backgroundColor: '#FFFFFF',
    borderRadius: 10
  }
});
