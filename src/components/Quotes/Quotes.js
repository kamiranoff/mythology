import React, { PropTypes } from 'react';
import { View } from 'react-native';
import Swiper from 'react-native-swiper';

import { MQuote } from '../../commonComponents';
import styles from './styles';

const Quotes = ({ quotes }) => (
  <View>
  <Swiper
    showsButtons={true}
    loop={true}
  >
    {quotes.map((quote,i) => (
      <View key={i} style={styles.quotesContainer}>
        <MQuote
          quote={quote}
        />
      </View>
    ))}
  </Swiper>
    </View>
);

Quotes.propTypes = {
  quotes: PropTypes.array.isRequired,
};

// Render to the device
export default Quotes;
