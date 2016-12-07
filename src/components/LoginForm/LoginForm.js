import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { MCardSection, MButton, MTextInput } from '../../commonComponents';
import { styles } from './styles';

class LoginForm extends Component {

  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  render() {
    const self = this;
    function test() {
      console.log(self.props);
    }
    return (
      <View>
        <MTextInput
          value={this.state.text}
          onChangeText={text => this.setState({ text })}
          label={'username'}
        />

        <MButton
          buttonText="click"
          onPress={() => {
            console.log('Pressed');
            test();
          }}
        />
      </View>
    );
  }
}

export default LoginForm;
