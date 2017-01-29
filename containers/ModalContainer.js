import React, { Component } from 'react'
import {
  StyleSheet,
  Modal,
  View,
  Text,
  Button,
  TouchableHighlight,
} from 'react-native'
import { connect } from 'react-redux'

export default class ModalContainer extends Component {
  state = {
    modelVisible: false,
  }

  setModelVisible(visible) {
    this.setState({ modelVisible: visible })
  }

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modelVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
        >
          <View style={{marginTop: 22}}>
          <View>
            <Text>Hello World!</Text>

            <Button title={'X'} onPress={() => this.setModelVisible(false)}/>

          </View>
         </View>
        </Modal>

        <Button title={'Show Model'} onPress={() => this.setModelVisible(true)}/>
      </View>
    )
  }
}
