// IOS :)
import React, { Component } from 'react';
import { Router } from 'react-native-router-flux';
import firebase from 'firebase';

import getEnvironment from '../../constants/environment';
import Scenes from '../../Scenes/Scenes';

const ENV = getEnvironment();
class App extends Component {

  componentWillMount() {
    firebase.initializeApp(ENV.firebaseConf);
  }

  render() {
    return (
      <Router scenes={Scenes} />
    );
  }

}

// Render to the device
export default App;
