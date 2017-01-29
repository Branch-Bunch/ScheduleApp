import React, { Component } from 'react';
import {
  StyleSheet,
  ListView,
  View,
  Text,
} from 'react-native';

const food = {
  jacky: [
    'js',
    'redux',
    'coolness',
    'eating',
  ],
  viraj: [
    'html',
    'css',
    'school',
    'nasty woman',
  ],
  ben: [
    'swift',
    'was sick at conU'
  ]
}

export default class ListContainer extends Component {
  constructor() {
    super()

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    })

    this.state = {
      dataSource: ds.cloneWithRows(food),
    }
  }

  render() {
    return (
      <ListView
      dataSource={this.state.dataSource}
      renderRow={(rowdata) => <Text>{rowdata}</Text>}
      renderHeader={this.renderHeader}
      renderSectionHeader={this.renderSectionHeader}
      />
    )
  }

  renderHeader() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome</Text>
      </View>
    )
  }

  renderSectionHeader(sectionData, category) {
    return (
      <Text>{category}</Text>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
