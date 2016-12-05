// IOS :)
import React from 'react';
import { Router } from 'react-native-router-flux';

import Scenes from '../Scenes/Scenes';


const App = () => (
  <Router scenes={Scenes} />
);

// Render to the device
export default App;
