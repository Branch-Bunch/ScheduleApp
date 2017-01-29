import React from 'react'
import {
  Button,
  View,
} from 'react-native';

const Filters = ({
  tags,
  updateFilter,
}) => {
  const filterButtons = tags.map((tag) => (
    <Button
      title={tag}
      onPress={() => updateFilter(tag)}
    />
  ))
  return (
    <View>
      {Filters}  
    </View>
  )
}
