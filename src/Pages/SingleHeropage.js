import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image } from 'react-native';
import { MBackground, MLabel } from '../commonComponents';

import { styles } from './styles';

class SingleHeropage extends Component {

  render() {
    const {
      images,
      name,
      greekName,
      romanName,
      category,
      description,
    } = this.props.hero;
    return (
      <MBackground scrollView>
        <View style={{ height: 300 }}>
          <Image
            style={{ resizeMode: 'cover', height: 300 }}
            source={{
              uri: images[1].regular,
            }}/>
        </View>
        <MLabel category={category} />
        <View style={{ paddingHorizontal: 10, marginBottom: 30 }}>
          <Text
            style={{ paddingTop: 20, textAlign: 'center', fontSize: 40 }}
          >{name}
          </Text>
          <Text style={{
            fontStyle: 'italic',
            paddingTop: 5,
            paddingBottom: 20,
            textAlign: 'center',
            fontSize: 15,
          }}>{greekName} - {romanName}</Text>

          <Text>{description}</Text>
        </View>
      </MBackground>
    );
  }
}

SingleHeropage.propTypes = {
  hero: PropTypes.object.isRequired,
};

const mapStateToProps = ({}) => ({});

export default connect(mapStateToProps, null)(SingleHeropage);

