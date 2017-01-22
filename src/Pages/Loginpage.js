import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { MBackground } from '../commonComponents';
import LoginForm from '../components/LoginForm/LoginForm';
import { loginFromUsernameAndPassword, signUp } from '../actions/user';

class Loginpage extends Component {
  constructor() {
    super();
    this.state = {
      errorMsg: '',
      loading: false,
      createAccountOption: false,
    };

    this.signIn = this.signIn.bind(this);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLoginFail = this.onLoginFail.bind(this);
    this.createAccount = this.createAccount.bind(this);
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
//     this.setState({ errorMsg: error.message, loading: false });
//     if (error.code === 'auth/user-not-found') {\
//     if (error) {
//       this.setState({ createAccountOption: true });
//     }
  }

  signIn(credentials) {
    this.setState({ errorMsg: '', loading: true });

    this.props.loginFromUsernameAndPassword(credentials)
      .then(this.onLoginSuccess)
      .catch((e) => {
        this.onLoginFail(e);
        this.setState({ errorMsg: 'Error', loading: false });
      });
  }

  createAccount(credentials) {
    this.setState({ errorMsg: '', loading: true });

    this.props.signUp(credentials)
      .then(this.onLoginSuccess)
      .catch((e) => {
        this.setState({ errorMsg: 'Error', loading: false });
        this.onLoginFail(e);
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
            signIn={this.signIn}
            errorMessage={this.state.errorMsg}
            loading={this.state.loading}
            createAccountOption={this.state.createAccountOption}
            createAccount={this.createAccount}
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
export default connect(mapStateToProps, { loginFromUsernameAndPassword, signUp })(Loginpage);
