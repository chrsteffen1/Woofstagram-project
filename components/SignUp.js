import React from 'react';
import { View } from 'react-native';
import InputField from './InputField';
import {Formik} from 'formik'

const SignUp = () => {
  function onSubmit(values) {
    if(values.password !==values.confirmPassword){
      alert("Passwords do not match")
    }
  }




  return (  
    <Formik
    initialValues={{
      email: '',
      password: '',
      confirmPassword: '',
      petName: '',
      dob: '',
      breed: '',
      toy: '',
    }}
    onSubmit={onSubmit}
    >  
    {({handleChange, handleSubmit, values})=>
      <View style={{justifyContent: 'center', backgroundColor: '#ecf0f1'}}>
        <InputField 
        label= 'email'
        placeHolder= "Enter your email"
        value={values.email}
        onChangeText={handleChange('email')}
        />
        <InputField 
        label= 'password'
        placeHolder= "Make a password"
        value={values.password}
        onChangeText={handleChange('password')}
        secureTextEntry={true}
        />
        <InputField 
        label= 'Confirm password'
        placeHolder= "Confirm your password"
        value={values.confirmPassword}
        onChangeText={handleChange('confirmPassword')}
        secureTextEntry={true}
        onSubmitEditing={handleSubmit}
        />
        <InputField 
        label= 'Pets Name'
        placeHolder= "Tell us your furry friends name"
        value={values.petName}
        onChangeText={handleChange('petName')}
        />
        <InputField 
        label= 'pets date of birth'
        placeHolder= "Enter their dob"
        value={values.dob}
        onChangeText={handleChange('dob')}
        />
        <InputField 
        label= 'breed'
        placeHolder= "What breed are they"
        value={values.breed}
        onChangeText={handleChange('breed')}
        />
        <InputField 
        label= 'favorite toy'
        placeHolder= "What is their favorite toy"
        value={values.toy}
        onChangeText={handleChange('toy')}
        />
      </View>
    }
    </Formik>
  );
}

export default SignUp;