import React, { Component } from 'react'
import {
  StyleSheet,
  Modal,
  View,
  Text,
  Button,
  TouchableHighlight,
} from 'react-native'
import { fetchDetailedSchedule } from '../actions'
import { connect } from 'react-redux'
import ListContainer from './ListContainer.js'

const mapStateToProps = (state) => { return {
  detailedSchedules: state.schedules.detById,
  id: state.selectedId
  }
}

class ModalContainer extends Component {
  state = {
    modelVisible: false,
  }

  setModelVisible(visible) {
    this.setState({ modelVisible: visible })
  }

  render() {
    const { detailedSchedules, id, fetchDetailedSchedule } = this.props
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modelVisible}
        >
          <View style={{marginTop: 22}}>
          <View>
            <Text>Hello World!</Text>
            <Button title={'X'} onPress={() => this.setModelVisible(false)}/>
          </View>
         </View>
        </Modal>

        <Button title={'Show Modal'} onPress={() => this.setModelVisible(true)}/>
        <ListContainer onPress={(id) => {
          fetchDetailedSchedule(id)
          this.setModelVisible(true)
        }}/>

      </View>
    )
  }
}

export default connect(
  mapStateToProps,
  { fetchDetailedSchedule },
)(ModalContainer)
