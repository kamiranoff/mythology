import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MCounter = ({ onPressed, liked, likes = 0 }) => (
  <View
    style={{ width: 55, height: 20, flex: 1, flexDirection: 'row' }}
  >
    <Text
      style={{ width: 30, textAlign: 'right', marginRight:5 }}
    >
      {likes}
    </Text>

    {liked ?
      <TouchableOpacity
        onPress={() => onPressed(!liked)}
        style={{ flex: 1 }}
      >
        <Icon name="thumbs-up" size={20}/>
      </TouchableOpacity> :
      <TouchableOpacity
        onPress={() => onPressed(liked)}
        style={{ flex: 1 }}
      >
        <Icon name="thumbs-o-up" size={20}/>
      </TouchableOpacity>

    }
  </View>
);

MCounter.propTypes = {
  onPressed: PropTypes.func.isRequired,
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number,
};

export { MCounter };


