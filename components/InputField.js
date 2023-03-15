import React from "react";
import {View, Text, TextInput} from 'react-native'

const InputField = ({label, placeHolder, value, onChangeText, secureTextEntry= false, onSubmitEditing}) => {
  return (  
    <>
    <View>
      <Text style={{padding: 8, fontSize: 18}}>
        {label}
      </Text>
      <TextInput 
      placeholder={placeHolder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      onSubmitEditing={onSubmitEditing}
      style={{padding: 8, fontSize: 18}}
      />
    </View>
    </>
  );
}
 
export default InputField;