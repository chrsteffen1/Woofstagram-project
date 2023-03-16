import React from "react";
import {Text, StyleSheet} from 'react-native'

const Title = () => {
  return (  
    <Text style={StyleSheet.title}>
      {props.children}
    </Text>
  );
}
 
export default Title;