import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

let imageSrc = {
  uri: 'https://c1.staticflickr.com/5/4063/4706409168_db387a311e_b.jpg'
}

const Header = ({
  title,
}) => (
  <View style={styles.container}>
    <Image source={imageSrc} style={styles.backgroundImage}>
      <Text style={styles.Backtext}> McHacks</Text>
    </Image>
  </View>
)

const styles = StyleSheet.create({
  container: {
    margin: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    flexDirection: 'column',
    // paddingTop: ,
    // paddingBottom: 20,
    // paddingLeft: 10,
    // paddingRight: 10
  },

  backgroundImage: {
      flex: 1,
      width: 380,
      height: 100,
      resizeMode: 'stretch', // or 'stretch'
      alignItems: 'stretch',

  },
  Backtext:{
    textAlign: 'center',
    fontSize: 45,
    // color:'white',
    fontWeight: 'bold',
  }
})

export default Header
