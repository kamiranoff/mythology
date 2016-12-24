import React, { PropTypes } from 'react';
import { View, Text, Image } from 'react-native';
import { MBackground, MLabel } from '../../commonComponents';

import styles from './styles';

const SingleHeropage = ({ hero }) => {
  const {
    images,
    name,
    greekName,
    romanName,
    category,
    description,
  } = hero;
  return (
    <MBackground scrollView>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: images[1].regular,
          }}
        />
      </View>
      <MLabel
        category={category}
      />
      <View style={styles.descriptionContainer}>
        <Text
          style={styles.name}
        >{name}
        </Text>
        <Text style={styles.greekName}>
          {greekName} - {romanName}
        </Text>

        <Text>{description}</Text>
      </View>
    </MBackground>
  );
};

SingleHeropage.propTypes = {
  hero: PropTypes.object.isRequired,
};

export default SingleHeropage;
