// IOS :)
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

import { MBackground } from '../commonComponents';
import LoginForm from '../components/LoginForm/LoginForm';

import { styles } from './styles';

class Loginpage extends Component {
  constructor() {
    super();
    this.state = {
      errorMsg: '',
      loading: false,
      createAccountOption: false,
    };

    this.signInToFirebase = this.signInToFirebase.bind(this);
    this.createAccountToFirebase = this.createAccountToFirebase.bind(this);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLoginFail = this.onLoginFail.bind(this);
  }

  onLoginSuccess() {
    this.setState({
      errorMsg: '',
      loading: false,
      createAccountOption: false,
    });
    Actions.pop();
  }

  onLoginFail(error) {
    this.setState({ errorMsg: error.message, loading: false });
    if (error.code === 'auth/user-not-found') {
      this.setState({ createAccountOption: true });
    }
  }

  signInToFirebase(username, password) {
    this.setState({ errorMsg: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(username, password)
      .then(this.onLoginSuccess)
      .catch((e) => {
        this.onLoginFail(e);
      });
  }

  createAccountToFirebase(username, password) {
    firebase.auth().createUserWithEmailAndPassword(username, password)
      .then(this.onLoginSuccess)
      .catch((e) => {
        this.setState({ errorMsg: e.message, loading: false });
      });
  }


  render() {
    return (
      <MBackground >
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <LoginForm
            signIn={this.signInToFirebase}
            errorMessage={this.state.errorMsg}
            loading={this.state.loading}
            createAccountOption={this.state.createAccountOption}
            createAccount={this.createAccountToFirebase}
          />
        </View>
      </MBackground>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user,
});

// Render to the device
export default connect(mapStateToProps, null)(Loginpage);
