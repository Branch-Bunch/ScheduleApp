import React from 'react'
import {
  View,
  Text,
} from 'react-native'
import { connect } from 'react-redux'
import { updateFilter } from '../actions'
import Filters from '../components/Filters.js'

const FilterContainer = ({
  tags,
  currentFilter,
  updateFilter,
}) => (
  <View>
    <Filters
      tags={tags}
      updateFilter={updateFilter}
    />
    <Text>
      Showing: {currentFilter || 'All'}
    </Text>
  </View>
)

const mapStateToProps = state => ({
  tags: state.tags,
  currentFilter: state.currentFilter,
})

export default connect(
  mapStateToProps,
  { updateFilter },
)(FilterContainer)
