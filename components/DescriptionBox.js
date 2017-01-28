import React from 'react'
import {
  Text,
  View,
} from 'react-native'

const DescriptionBox = ({
  title,
  description,
}) => (
    <View style={{alignItems: 'center'}}>
      <Text>{title}</Text>
      <Text>{description}</Text>
    </View>
)

export default DescriptionBox
