import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const imageUrl = 'http://www.music.mcgill.ca/~ich/pix/McGill_logoT.gif';

const Header ({
  title,
/** imageUrl */ ,
}) => (
  <View style={styles.container}>
  <Image source={require(imageUrl)}
  <Text>"Enter Event Title Here"</Text>
  </Image>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
}
