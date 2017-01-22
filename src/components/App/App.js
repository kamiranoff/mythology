// IOS :)
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Router } from 'react-native-router-flux';

import Scenes from '../Scenes/Scenes';

import {  loginWithToken } from '../../actions/user';
import { fetchAllGreeks } from '../../actions/figures';
import { fetchBooks } from '../../actions/books';
import { fetchQuotes } from '../../actions/quotes';

class App extends Component {

  componentWillMount() {
    this.props.loginWithToken();
    this.props.fetchQuotes('random', true);
    this.props.fetchAllGreeks();
    this.props.fetchBooks();
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
  loginWithToken: PropTypes.func.isRequired,
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
    loginWithToken,
    fetchAllGreeks,
    fetchBooks,
    fetchQuotes,
  })(App);
