import React from "react";
import {Image, StyleSheet, View} from 'react-native'

const Avatar = (props) => {
  <View>
      <Image
      style={ StyleSheet.avatar}
      source={{ uri: props.url}}
      />
  </View>
}


const styles = StyleSheet.create({
  avatar: {
    borderRadius: '50%',
    height: 64,
    width: 64,
  },
});


export default Avatar;