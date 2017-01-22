import React, { Component, PropTypes } from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  View
} from 'react-native';

import { MButton, MTextInput, MSpinner, MErrorMessage } from '../../commonComponents';

class LoginForm extends Component {

  constructor() {
    super();
    this.state = {
      email: 'aphrodite@mythology.com',
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
          this.props.signIn(this.state);
        }}
      />
    );
  }

  renderSignUpButton() {
    return (
      <MButton
        buttonText="Create an account"
        onPress={() => {
          this.props.createAccount(this.state);
        }}
      />
    );
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior="position"
        style={{
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
          <View>
            <MTextInput
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
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
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
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
