
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    justifyContent: 'center',
    backgroundColor: '#00c3ff', /* fallback for old browsers */

  },
  text: {
    fontSize: 13,
    textAlign: 'center',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

const SectionHeader = (props) => (
  <View style={styles.container}>
    <Text style={styles.text}>{props.title}</Text>
  </View>
);

export default SectionHeader;
