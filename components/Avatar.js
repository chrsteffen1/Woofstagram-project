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
    flex:1,
    backgroundColor: '#fff',
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});


export default Avatar;