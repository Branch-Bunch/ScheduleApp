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
    const { detailedSchedules, id } = this.props
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

        <Button title={'Show Model'} onPress={() => this.setModelVisible(true)}/>
      </View>
    )
  }
}

export default connect(
  mapStateToProps,
)(ModalContainer)
