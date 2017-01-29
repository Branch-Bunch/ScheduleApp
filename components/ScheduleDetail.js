
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    justifyContent: 'center',
  },
});

const ScheduleDetail = (props) => (
  <View style={styles.container}>
    <Text style={props.textStyle}>{props.text}</Text>
  </View>
);

export default ScheduleDetail;
