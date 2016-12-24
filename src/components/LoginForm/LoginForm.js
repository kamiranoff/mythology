import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';

import { MButton, MTextInput, MSpinner, MErrorMessage } from '../../commonComponents';

class LoginForm extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  renderSignInButton() {
    if (this.props.loading) {
      return (<MSpinner />);
    }

    return (
      <MButton
        buttonText="Sign in"
        onPress={() => {
          this.props.signIn(this.state.username, this.state.password);
        }}
      />
    );
  }

  renderSignUpButton() {
    if (this.props.createAccountOption) {
      return (
        <MButton
          buttonText="Create an account"
          onPress={() => {
            this.props.createAccount(this.state.username, this.state.password);
          }}
        />
      );
    }
    return null;
  }

  render() {
    return (
      <View>
        <MTextInput
          value={this.state.username}
          onChangeText={username => this.setState({ username })}
          label={'Email'}
          placeholder="aphrodite@gmail.com"
        />

        <MTextInput
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          label={'Password'}
          placeholder="Password123"
          secureTextEntry
        />
        <MErrorMessage errorMessage={this.props.errorMessage} />
        {this.renderSignInButton()}
        {this.renderSignUpButton()}
      </View>
    );
  }
}

LoginForm.propTypes = {
  signIn: PropTypes.func.isRequired,
  createAccount: PropTypes.func.isRequired,
  createAccountOption: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default LoginForm;
