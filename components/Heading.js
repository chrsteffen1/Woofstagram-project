import React from "react";
import {Text, StyleSheet, View} from 'react-native'
const  Heading = (props) => {
  return (
    <View>
      <Text style={StyleSheet.heading}>
        {props.childred}
      </Text>
    </View>  
  );
}

export default Heading;