import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

class ClassComponent extends Component {

  render() {
    return (
      <View>
        <Text>ClassComponent</Text>
      </View>
    );
  }
}

ClassComponent.propTypes = {};

export default ClassComponent;
