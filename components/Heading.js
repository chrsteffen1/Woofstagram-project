import React from "react";
import {Text, StyleSheet} from 'react-native'
const  Heading = (props) => {
  return (  
    <Text style={StyleSheet.heading}>
      {props.childred}
    </Text>
  );
}

export default Heading;