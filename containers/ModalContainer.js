import React, { Component } from 'react'
import {
  StyleSheet,
  Modal,
  View,
  Text,
  Button,
  TouchableHighlight,
  ScrollView
} from 'react-native'
import { fetchDetailedSchedule, updateSelectedId } from '../actions'
import { connect } from 'react-redux'
import ListContainer from './ListContainer.js'
import ScheduleDetail from '../components/ScheduleDetail.js'

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
    const { detailedSchedules, id, fetchDetailedSchedule, updateSelectedId } = this.props
    const detailedSchedule = detailedSchedules[id] || {}
    console.log(detailedSchedule);
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modelVisible}
        >
          <View style={{marginTop: 22}}>
          <View>
            <ScrollView>
              <ScheduleDetail text={detailedSchedule.name || ''}/>
              <ScheduleDetail text={detailedSchedule.time || ''}/>
              <ScheduleDetail text={detailedSchedule.place || ''}/>
              <ScheduleDetail text={detailedSchedule.description || ''}/>
              <ScheduleDetail text={detailedSchedule.duration || ''}/>
              <ScheduleDetail text={detailedSchedule.tag || ''}/>
            </ScrollView>
            <Button title={'X'} onPress={() => this.setModelVisible(false)}/>
          </View>
         </View>
        </Modal>

        <Button title={'Show Modal'} onPress={() => this.setModelVisible(true)}/>
        <ListContainer onPress={(id) => {
          fetchDetailedSchedule(id)
          this.setModelVisible(true)
          updateSelectedId(id)
        }}/>

      </View>
    )
  }
}

export default connect(
  mapStateToProps,
  { fetchDetailedSchedule, updateSelectedId },
)(ModalContainer)
