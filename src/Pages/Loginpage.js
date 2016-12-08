// IOS :)
import React from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import { MBackground } from '../commonComponents';
import LoginForm from '../components/LoginForm/LoginForm';

import { styles } from './styles';

let errorMsg = '';
// @TODO Complete code and Fix error message
const signInToFirebase = (username, password) => {
  console.log(username, password);
  firebase.auth().signInWithEmailAndPassword(username, password)
    .catch((e) => {
      console.log(e.message);
      errorMsg = e.message;
    });
};

const Loginpage = () => (
  <MBackground >
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <LoginForm
        signInToFirebase={signInToFirebase}
        errorMessage={errorMsg}
      />
    </View>
  </MBackground>
);

// Render to the device
export default Loginpage;
