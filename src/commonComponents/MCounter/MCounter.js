import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MCounter = () => (
  <View
    style={{ width: 40, height: 20, flex: 1, flexDirection: 'row' }}
  >
    <Text
      style={{ flex: 1 }}
    >
      0
    </Text>

    <TouchableOpacity
      onPress={() => console.log('pressed')}
      style={{ flex: 1 }}
    >
      <Icon name="thumbs-o-up" size={20} />
    </TouchableOpacity>
  </View>
);

MCounter.propTypes = {};

const mapStateToProps = ({}) => ({});

export default connect(mapStateToProps, null)(MCounter);


