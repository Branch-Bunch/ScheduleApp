import React, { Component } from 'react'
import {
  StyleSheet,
  ListView,
  View,
  Text,
} from 'react-native'

import SectionHeader from './SectionHeader.js'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  welcome: {
    fontSize: 80,
  },
  header: {
    fontWeight: 'bold',
    // fontSize: 30,
    textAlign: 'center',
  }
});

const dataBlob = {
  Jacky: [
    'js',
    'redux',
    'coolness',
    'eating',
  ],
  Viraj: [
    'html',
    'css',
    'school',
    'nasty woman',
  ],
  Ben: [
    'swift',
    'was sick for conU'
  ]
}

const sectionIdentities = [
  'Jacky',
  'Viraj',
  'Ben',
]

const rowIdentities = [
  [0,1,2,3,],
  [0,1,2,3,],
  [0,1,]
]

export default class ListContainer extends Component {
  constructor() {
    super()

    const getSectionData = (dataBlob, sectionId) => `${sectionId}`;
    const getRowData = (dataBlob, sectionId, rowId) => dataBlob[sectionId][rowId];

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
      getSectionData,
      getRowData,
    })

    this.state = {
      dataSource: ds.cloneWithRowsAndSections(dataBlob, sectionIdentities, rowIdentities),
    }
  }

  render() {
    return (
      <ListView
      dataSource={this.state.dataSource}
      renderRow={(rowData, sectionID, rowID, highlightRow)  => <Text>{rowData}</Text>}
      renderHeader={this.renderHeader}
      renderSectionHeader={this.renderSectionHeader}
      />
    )
  }

  renderHeader() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>McHacks</Text>
      </View>
    )
  }

  renderSectionHeader(sectionData, sectionID) {
    return (
      <Text style={styles.header}>{sectionID}</Text>
    )
  }
}
