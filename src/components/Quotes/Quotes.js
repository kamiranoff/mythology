import React, { PropTypes } from 'react';
import { View } from 'react-native';
import Swiper from 'react-native-swiper';

import { MQuote, MArrow } from '../../commonComponents';
import { NAVBAR_HEIGHT } from '../../constants/styles';
import styles from './styles';

const Quotes = ({ quotes }) => (
  <View>
  <Swiper
    showsButtons={true}
    loop={true}
    buttonWrapperStyle={{marginTop: -NAVBAR_HEIGHT }}
    prevButton={
    <MArrow
      overrideStyleArrow={{transform:[{rotateY: '180deg'}]}}
      />
    }
    nextButton={<MArrow />}
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
