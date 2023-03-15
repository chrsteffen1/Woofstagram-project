import React from "react";
import {View, Text, TextInput} from 'react-native'

const InputField = ({label, placeHolder, value, onChangeText, secureTextEntry= false, onSubmitEditing}) => {
  return (  
    <>
    <View>
      <Text style={{padding: 16, fontSize: 24}}>
        {label}
      </Text>
      <TextInput 
      placeholder={placeHolder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      onSubmitEditing={onSubmitEditing}
      style={{padding: 16, fontSize: 24}}
      />
    </View>
    </>
  );
}

export default InputField;