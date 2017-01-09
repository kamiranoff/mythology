// IOS :)
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Router } from 'react-native-router-flux';
import firebase from 'firebase';

import getEnvironment from '../../constants/environment';
import Scenes from '../Scenes/Scenes';

import { setLoginStatus } from '../../actions/user';
import { fetchAllGreeks } from '../../actions/figures';
import { fetchBooks } from '../../actions/books';
import { fetchQuotes } from '../../actions/quotes';

const ENV = getEnvironment();

class App extends Component {

  constructor(props) {
    super(props);

    this.props.fetchQuotes('random', true);
    this.props.fetchAllGreeks();
    this.props.fetchBooks();
  }

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
      <Router
        scenes={Scenes}
      />
    );
  }
}

App.propTypes = {
  setLoginStatus: PropTypes.func.isRequired,
  fetchAllGreeks: PropTypes.func.isRequired,
  fetchQuotes: PropTypes.func.isRequired,
  fetchBooks: PropTypes.func.isRequired,
  user: PropTypes.shape(),
};

const mapStateToProps = ({
  user,
}) => ({
  user,
});

export default connect(mapStateToProps,
  {
    setLoginStatus,
    fetchAllGreeks,
    fetchBooks,
    fetchQuotes,
  })(App);
