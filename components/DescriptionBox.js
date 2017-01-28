import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

export default function DescriptionBox({
  title,
  description,
}) {
  return (
    <View style={{alignItems: 'center'}}>
      <Text>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
}
