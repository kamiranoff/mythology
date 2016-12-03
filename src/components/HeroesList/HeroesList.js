import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

import { styles } from './styles';

class HeroesList extends Component {

  constructor() {
    super();
    axios.get('https://mythology-268a0.firebaseio.com/')
      .then((response) => {
        console.log(response);
      });
  }

  render() {
    return (
      <View>
        <Text>ClassComponent</Text>
      </View>
    );
  }
}

export default HeroesList;
