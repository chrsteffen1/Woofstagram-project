import React from 'react';
import { View } from 'react-native';
import InputField from './InputField';
import { useState } from 'react';

const SignUp = () => {
  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')
  const [confirmPassword, setConfirmPassword]= useState('')
  const [petName, setPetName]= useState('')
  const [dob, setDob]= useState('')
  const [breed, setBreed]= useState('')
  const [toy, setToy]= useState('')

  function confirmPasswordMatch(props) {
    const {nativeEvent: {text}} = props
    if( text !== password) {
      alert("Passwords must match")
    }
  }


  return (  
    <View style={{justifyContent: 'center', backgroundColor: '#ecf0f1', padding: 16}}>
      <InputField 
      label= 'email'
      placeHolder= "Enter your email"
      value={email}
      onChangeText={setEmail}
      />
      <InputField 
      label= 'password'
      placeHolder= "Make a password"
      value={password}
      onChangeText={setPassword}
      secureTextEntry={true}
      />
      <InputField 
      label= 'Confirm password'
      placeHolder= "Confirm your password"
      value={confirmPassword}
      onChangeText={setConfirmPassword}
      secureTextEntry={true}
      onSubmitEditing={confirmPasswordMatch}
      />
      <InputField 
      label= 'Pets Name'
      placeHolder= "Tell us your furry friends name"
      value={petName}
      onChangeText={setPetName}
      />
      <InputField 
      label= 'pets date of birth'
      placeHolder= "Enter their dob"
      value={dob}
      onChangeText={setDob}
      />
      <InputField 
      label= 'breed'
      placeHolder= "What breed are they"
      value={breed}
      onChangeText={setBreed}
      />
      <InputField 
      label= 'favorite toy'
      placeHolder= "What is their favorite toy"
      value={toy}
      onChangeText={setToy}
      />
    </View>
  );
}

export default SignUp;