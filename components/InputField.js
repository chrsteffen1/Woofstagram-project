import React from "react";
import {View, Text, TextInput} from 'react-native'

const InputField = ({label, placeHolder, value, onChangeText}) => {
  return (  
    <>
    <View>
      <Text>
        {label}
      </Text>
      <TextInput 
      placeholder={placeHolder}
      value={value}
      onChangeText={onChangeText}
      />
    </View>
    </>
  );
}
 
export default InputField;