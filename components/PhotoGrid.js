import React from 'react';
import {  AppRegistry,  StyleSheet,  Dimensions,  View,  Image,  ScrollView} from 'react-native';

//TODO apply component to photos (story mode) and to badges (User)
//const data = {"id":1, "company": 4, "name":"John", "surname":"Doe", "idNum":"121396M", "fund":3.65, "time": 5, "img":"female1.png"};

export default class PhotoGrid extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style = {styles.photoGrid}>

          <View style = {styles.photoWrap}>
            <Image style={styles.photo} source={require("../assets/Profiles/female1.png")} />
          </View>
          <View style = {styles.photoWrap}>
            <Image style={styles.photo} source={require("../assets/Profiles/female2.png")} />
          </View>
        </View>
      </ScrollView>
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
    height: 120,
    width: (Dimensions.get('window').width / 2) - 4
  },
  photo:{
    flex: 1,
    width: null,
    alignSelf: 'stretch'
  }
});
