import React, { PropTypes } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { MBackground, MLabel } from '../../commonComponents';
import HTMLView from 'react-native-htmlview';

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
          adjustsFontSizeToFit
          allowFontScaling
          style={styles.name}
        >{name}
        </Text>
        <Text style={styles.greekName}>
          {greekName}{romanName ? ` - ${romanName}` : null }
        </Text>
        <HTMLView
          value={description}
          stylesheet={htmlStyle}
        />
      </View>
    </MBackground>
  );
};

const htmlStyle = StyleSheet.create({
  h1: {
    fontSize: 20,
  },
  h3: {
    marginTop: 20,
    paddingTop: 20,
    margin: 20,
    padding: 20,
    top:10,
    fontSize: 18,
  },
  div: {
    lineHeight: 30,
  },
  blockquote: {
    marginLeft: 10,
    fontStyle: 'italic',
  },
});


SingleHeropage.propTypes = {
  hero: PropTypes.object.isRequired,
};

export default SingleHeropage;
