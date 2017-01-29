import React from 'react'
import {
  Button,
  View,
} from 'react-native';

const Filters = ({
  tags,
  updateFilter,
}) => {
  const filterButtons = tags.map((tag, index) => (
    <Button
      title={tag}
      onPress={() => updateFilter(tag)}
      key={index}
    />
  ))
  return (
    <View>
      {filterButtons}  
    </View>
  )
}

export default Filters
