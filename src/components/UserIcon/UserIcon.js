import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import styles from './styles';

const profile = require('../../assets/images/helmet/helmet.png');
const profilebw = require('../../assets/images/helmetbw/helmetbw.png');

const goToLogin = (isAuthenticated) => {

  if (isAuthenticated) {
    Actions.logout({ type: 'push' });
  } else {
    Actions.login({ type: 'push' });
  }
};

const renderProfileImage = (isAuthenticated) => {
  if (isAuthenticated) {
    return profile;
  }
  return profilebw;
};

const UserIcon = ({ isAuthenticated }) => (
  <TouchableOpacity
    onPress={() => goToLogin(isAuthenticated)}
  >
    <Image
      style={styles.image}
      source={renderProfileImage(isAuthenticated)}
    />
  </TouchableOpacity>

);

UserIcon.propTypes = {
  isLoggedIn: PropTypes.bool,
};

const mapStateToProps = ({
  user: { isAuthenticated },
}) => ({
  isAuthenticated,
});

export default connect(mapStateToProps, null)(UserIcon);
