
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    justifyContent: 'center',
    backgroundColor: '#D3D3D3', /* fallback for old browsers */

  },
  text: {
    fontSize: 13,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

const SectionHeader = (props) => (
  <View style={styles.container}>
    <Text style={styles.text}>{props.title}</Text>
  </View>
);

export default SectionHeader;
