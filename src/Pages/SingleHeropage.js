import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image } from 'react-native';
import { MBackground } from '../commonComponents';

import { styles } from './styles';

class SingleHeropage extends Component {

  render() {
    return (
      <MBackground>

        <View style={{ height: 200 }}>
          <Image
            style={{ resizeMode: 'cover', height: 200 }}
            source={{
              uri: this.props.hero.images[1].regular,
            }}/>
        </View>
        <View style={{ paddingHorizontal: 10 }}>
          <Text
            style={{ paddingTop: 20, textAlign: 'center', fontSize: 40 }}
          >{this.props.hero.name}
          </Text>
          <Text style={{
            fontStyle: 'italic',
            paddingTop: 5,
            paddingBottom: 20,
            textAlign: 'center',
            fontSize: 15,
          }}>{this.props.hero.greekName} - {this.props.hero.romanName}</Text>
          <Text>{this.props.hero.description}</Text>
        </View>
      </MBackground>

    );
  }
}

SingleHeropage.propTypes = {};

const mapStateToProps = ({}) => ({});

export default connect(mapStateToProps, null)(SingleHeropage);

