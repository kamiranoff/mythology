import React from 'react';
import { MBackground } from '../commonComponents';
import HeroesList from '../components/HeroesList/HeroesList';

const Homepage = () => (
  <MBackground>
    <HeroesList />
  </MBackground>
);

// Render to the device
export default Homepage;
