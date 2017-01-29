import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Row,
} from 'react-native';
import { connect } from 'react-redux'



const RowLayout = ({
}) => (
  <View style={styles.container}
  dataSource={this.state.dataSource}>
  // <Text style={styles.text}>{name}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 1,
    margin: 12,
},
row:{
  padding: 10
}
})


    export default RowLayout;
