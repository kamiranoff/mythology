// IOS :)
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Router } from 'react-native-router-flux';
import firebase from 'firebase';

import getEnvironment from '../../constants/environment';
import Scenes from '../Scenes/Scenes';

const RouterWithRedux = connect()(Router);
import { setLoginStatus } from '../../actions/user';

const ENV = getEnvironment();

class App extends Component {

  componentWillMount() {
    firebase.initializeApp(ENV.firebaseConf);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.setLoginStatus(true);
      } else {
        this.props.setLoginStatus(false);
      }
    });
  }

  render() {
    return (
      <RouterWithRedux
        isLoggedIn={this.props.user.isLoggedIn}
        scenes={Scenes}
      />
    );
  }
}

App.propTypes = {
  setLoginStatus: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = ({
  user,
}) => ({
  user,
});

export default connect(mapStateToProps, { setLoginStatus })(App);
