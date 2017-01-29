import React from 'react'
import { connect } from 'react-redux'
import { updateFilter } from '../actions'
import Filters from '../components/Filters.js'

const FilterContainer = ({
  tags,
  updateFilter,
}) => (
  <Filters
    tags={tags}
    updateFilter={updateFilter}
  />
)

const mapStateToProps = state => ({
  tags: state.tags
})

export default connect(
  mapStateToProps,
  { updateFilter },
)(FilterContainer)
