import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';

import { MButton, MTextInput } from '../../commonComponents';
import { styles } from './styles';

class LoginForm extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  render() {
    console.log(this.props);
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
        <View>
          <Text>
            {this.props.errorMessage}

          </Text>
        </View>
        <MButton
          buttonText="click"
          onPress={() => {
            this.props.signInToFirebase(this.state.username, this.state.password);
          }}
        />


      </View>
    );
  }
}

LoginForm.propTypes = {
  signInToFirebase: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

export default LoginForm;
