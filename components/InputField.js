import React from "react";
import {View, Text, TextInput} from 'react-native'

const InputField = ({label, placeHolder, value, onChangeText, secureTextEntry= false, onSubmitEditing}) => {
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
      secureTextEntry={secureTextEntry}
      onSubmitEditing={onSubmitEditing}
      />
    </View>
    </>
  );
}
 
export default InputField;