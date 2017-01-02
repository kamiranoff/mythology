import React, { PropTypes } from 'react';
import { View, Text, Image } from 'react-native';

import { MBackground, MButton } from '../../commonComponents';

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

const SingleBookpage = ({ book }) => {
  const {
    images,
    title,
    description,
    author,
  } = book;
  return (
    <MBackground scrollView>
      <View style={styles.descriptionContainer}>
        <Text
          style={styles.title}
        >{title}
        </Text>
        <Text
          style={styles.author}
        >by {author}
        </Text>
        {renderImage(images)}
        <Text style={styles.description}>{description}</Text>
        <MButton
          buttonText="Read Book"
          onPress={() => console.log('not implemented yet')}
        />
      </View>
    </MBackground>
  );
};

SingleBookpage.propTypes = {
  book: PropTypes.object.isRequired,
};

export default SingleBookpage;
