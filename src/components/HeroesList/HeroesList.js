import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import axios from 'axios';

import { MCardSection } from '../../commonComponents';

import { styles } from './styles';

import getEnvironment from '../../constants/environment';

const ENV = getEnvironment();
class HeroesList extends Component {

  constructor() {
    super();
    // @NOTE Require mock mythology-server
    axios.get(`${ENV.BASE_URL_WS}people`)
      .then((response) => {
        this.setState({ people: response.data });
      });
  }

  state = { people: [] };

  renderPeople() {
    return this.state.people.map((person, i) => (
      <MCardSection
        key={person.name + i}
      >
        <Text style={styles.listElementName}>{person.name}</Text>
        <View style={styles.listElementTypeContainer}>
          <Text style={styles.listElementType}>{person.type}</Text>
        </View>
      </MCardSection>
    ));
  }

  render() {
    return (
      <ScrollView style={styles.listContainer}>
        {this.renderPeople()}
      </ScrollView>
    );
  }
}

export default HeroesList;
