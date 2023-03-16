import React from "react";
import {Image, StyleSheet} from 'react-native'

const Avatar = (props) => {
  <Image
  style={ StyleSheet.avatar}
  source={{ uri: props.url}}
  />
}

export default Avatar;