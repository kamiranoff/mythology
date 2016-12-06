import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { CardSection, Button } from '../../commonComponents';
import { styles } from './styles';

class LoginForm extends Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View>
        <CardSection>
          <TextInput
            value={this.state.text}
            style={{ width: 200, height: 30 }}
            onChangeText={text => this.setState({ text })}
          />
        </CardSection>
        <CardSection>
          <Button
            buttonText="click"
            onPress={() => {
              console.log('Pressed');
            }}
          />
        </CardSection>
      </View>
    );
  }
}

export default LoginForm;
