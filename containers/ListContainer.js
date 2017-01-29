import React, { Component } from 'react'
import {
  StyleSheet,
  ListView,
  View,
  Text,
} from 'react-native'
import { connect } from 'react-redux'

import SectionHeader from '../components/SectionHeader.js'

const mapStateToProps = (state) => {
  console.log(state)
  const dataBlob = {
    minSchedules: state.schedules.minById,
    byTime: state.schedules.byTime,
  }

  console.log(dataBlob);

  const sectionIdentities = Object.keys(state.schedules.byTime).sort((a, b) => a - b)

  console.log(sectionIdentities);

  const rowIdentities = sectionIdentities.reduce((rowIds, sectionId) => ([
    ...rowIds,
    state.schedules.byTime[sectionId],
  ]), [])

  console.log(rowIdentities);

  const getSectionData = (dataBlob, sectionId) => sectionId;
  const getRowData = (dataBlob, sectionId, rowId) => dataBlob.minSchedules[rowId];

  const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2,
    sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    getSectionData,
    getRowData,
  })

  return {
    dataSource: ds.cloneWithRowsAndSections(dataBlob, sectionIdentities, rowIdentities),
  }
}

const ListContainer = ({dataSource}) => {
    return (
      <ListView
        dataSource={dataSource}
        renderRow={(rowData, sectionID, rowID, highlightRow) => <Text>{rowData}</Text>}
        renderHeader={renderHeader}
        renderSectionHeader={renderSectionHeader}
      />
    )
  }

function renderHeader() {
  return (
    <View>
      <Text>McHacks</Text>
    </View>
  )
}

function renderSectionHeader(sectionData, sectionID) {
  return (
      <Text>{sectionID}</Text>
  )
}

export default connect(
  mapStateToProps,
)(ListContainer)
