import React, { Component, PropTypes } from 'react';
import { View, Image, TextInput } from 'react-native';
import { debounce } from 'lodash';

import { TEXT_3 } from '../../constants/styles';
import styles from './styles';

const glass = require('./../../assets/images/magnifying-glass/magnifying-glass.png');
const glassbw = require('./../../assets/images/magnifying-glass-bw/magnifying-glass-bw.png');

class MSearchInput extends Component {
  constructor() {
    super();
    this.debounceSearch = debounce(this.debounceSearch, 300);
  }

  debounceSearch(input) {
    this.props.onSearchChange(input);
  }

  render() {
    const { value, placeholder } = this.props;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          placesholderTextColor={TEXT_3}
          onChangeText={input => this.debounceSearch(input)}
        />
        <Image
          style={styles.glass}
          source={value ? glass : glassbw}
        />
      </View>
    );
  }
}

MSearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

MSearchInput.defaultProps = {
  value: '',
};

export { MSearchInput };
