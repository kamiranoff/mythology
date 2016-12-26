import React, { PropTypes } from 'react';
import { View, Text, Image } from 'react-native';
import { MBackground, MLabel } from '../../commonComponents';

import styles from './styles';

const renderImage = (images) => {
  const imageFromApi = images.regular;
  if (imageFromApi) {
    return (
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: imageFromApi,
          }}
        />
      </View>
    );
  }
  return null;
};

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
      {renderImage(images)}
      <MLabel
        category={category}
        labelStyle={{
          position: 'absolute',
          top: 5,
          right: 5,
          zIndex: 1,
        }}
      />
      <View style={styles.descriptionContainer}>
        <Text
          style={styles.name}
        >{name}
        </Text>
        <Text style={styles.greekName}>
          {greekName}{romanName ? ` - ${romanName}` : null }
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
