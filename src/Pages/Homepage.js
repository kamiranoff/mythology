import React, { PropTypes } from 'react';

import { MBackground } from '../commonComponents';
import Quotes from '../components/Quotes/Quotes';


const Homepage = () => (
  <MBackground
  >
    <Quotes />
  </MBackground>
);

// Render to the device
export default Homepage;

