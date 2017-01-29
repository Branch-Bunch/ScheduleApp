import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

// const imageUrl = 'http://www.music.mcgill.ca/~ich/pix/McGill_logoT.gif';

// <Image source={require(imageUrl)}>
const Header = ({
  title,
/** imageUrl */
}) => (
  <View style={styles.container}>

  <Text>"Enter Event Title Here"</Text>

  </View>
)

const styles = StyleSheet.create({
  container: {
    margin: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
})

export default Header
