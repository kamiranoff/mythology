import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { styles } from './styles';

const profile = require('image!helmet');
const profilebw = require('image!helmetbw');

const goToLogin = (isLoggedIn) => {
  // if firebase has not responded return.
  if (isLoggedIn === null) {
    return;
  }

  if (isLoggedIn === false) {
    Actions.login({ type: 'push' });
  }

  if (isLoggedIn) {
    Actions.logout({ type: 'push' });
  }

};

const renderProfileImage = (isLoggedIn) => {
  if (isLoggedIn) {
    return profile;
  }
  return profilebw;
};

const UserIcon = ({ isLoggedIn }) => (
  <TouchableOpacity
    onPress={() => goToLogin(isLoggedIn)}
  >
    <Image
      style={styles.image}
      source={renderProfileImage(isLoggedIn)}
    />
  </TouchableOpacity>

);

UserIcon.propTypes = {
  isLoggedIn: PropTypes.bool,
};

const mapStateToProps = ({
  user: { isLoggedIn },
}) => ({
  isLoggedIn,
});

export default connect(mapStateToProps, null)(UserIcon);
