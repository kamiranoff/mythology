// IOS :)
import React from 'react';
import { View, Text } from 'react-native';

import { Background } from '../commonComponents';
import LoginForm from '../components/LoginForm/LoginForm';

import { styles } from './styles';

const Loginpage = () => (
  <Background >
    <LoginForm />
  </Background>
);

// Render to the device
export default Loginpage;
