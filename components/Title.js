import React from "react";
import {Text, StyleSheet,View} from 'react-native'

const Title = () => {
  return (  
    <View>
      <Text style={StyleSheet.title}>
        {props.children}
      </Text>
    </View>
  );
}

export default Title;