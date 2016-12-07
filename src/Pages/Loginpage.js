// IOS :)
import React from 'react';
import { View, Text } from 'react-native';

import { MBackground } from '../commonComponents';
import LoginForm from '../components/LoginForm/LoginForm';

import { styles } from './styles';

const Loginpage = () => (
  <MBackground >
    <LoginForm />
  </MBackground>
);

// Render to the device
export default Loginpage;
