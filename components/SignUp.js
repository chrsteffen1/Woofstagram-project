import React from 'react';
import { View } from 'react-native';
import InputField from './InputField';
import { useState } from 'react';

const SignUp = () => {
  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')

  return (  
    <View style={{justifyContent: 'center', backgroundColor: '#ecf0f1'}}>
      <InputField 
      label= 'email'
      placeHolder= "Enter your email"
      value={email}
      onChangeText={setEmail}
      secureTextEntry={false}
      />
      <InputField 
      label= 'password'
      placeHolder= "Make a password"
      value={password}
      onChangeText={setPassword}
      secureTextEntry={true}
      />
      <InputField 
      label= 'Pets Name'
      placeHolder= "Tell us your furry friends name"
      value=''
      onChangeText={() => {}}
      />
      <InputField 
      label= 'pets date of birth'
      placeHolder= "Enter their dob"
      value=''
      onChangeText={() => {}}
      />
      <InputField 
      label= 'breed'
      placeHolder= "What breed are they"
      value=''
      onChangeText={() => {}}
      />
      <InputField 
      label= 'favorite toy'
      placeHolder= "What is their favorite toy"
      value=''
      onChangeText={() => {}}
      />
    </View>
  );
}

export default SignUp;