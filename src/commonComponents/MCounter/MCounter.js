import React, { PropTypes } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MCounter = ({ onLikeButtonPressed, liked = false, likes = 0 }) => {
  return (
    <View
      style={{ width: 55, height: 20, flex: 1, flexDirection: 'row' }}
    >
      <Text
        style={{ width: 30, textAlign: 'right', marginRight: 5 }}
      >
        {likes}
      </Text>


      <TouchableOpacity
        onPress={() => onLikeButtonPressed(!liked)}
        style={{ flex: 1 }}
      >
        <Icon name={liked ? 'thumbs-up' : 'thumbs-o-up'} size={20} />
      </TouchableOpacity>

    </View>
  );
}

MCounter.propTypes = {
  onLikeButtonPressed: PropTypes.func.isRequired,
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number,
};

export { MCounter };


