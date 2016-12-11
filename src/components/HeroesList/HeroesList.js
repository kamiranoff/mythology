import React, { Component, PropTypes } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { connect } from 'react-redux';

import { MCardSection } from '../../commonComponents';
import { styles } from './styles';

import getEnvironment from '../../constants/environment';

const ENV = getEnvironment();
class HeroesList extends Component {

  renderPeople() {
    return this.props.greeks.map((person, i) => (
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


HeroesList.propTypes = {
  greeks: PropTypes.array.isRequired,
};

HeroesList.defaultProps = {
  greeks: [],
};

const mapStateToProps = ({
  api: { greeks },
}) => ({
  greeks,
});

export default connect(mapStateToProps, null)(HeroesList);
