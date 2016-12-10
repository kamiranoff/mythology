import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

import { MBackground, MButton, MErrorMessage } from '../commonComponents';

import { styles } from './styles';

class Logoutpage extends Component {
  constructor() {
    super();

    this.state = {
      errorMsg: '',
    };

    this.logout = this.logout.bind(this);
  }

  logout() {
    firebase.auth().signOut()
      .then(() => {
        Actions.pop();
      })
      .catch((e) => {
        this.setState({ errorMsg: e.message });
      });
  }

  render() {
    return (
      <MBackground>
        <MButton
          buttonText="Logout"
          onPress={() => {
            this.logout();
          }}
        />
        <MErrorMessage errorMessage={this.state.errorMsg}/>
      </MBackground>
    );
  }
}

export default Logoutpage;
