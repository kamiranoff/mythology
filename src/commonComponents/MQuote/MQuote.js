import React, { Component, PropTypes } from 'react';
import { View, Text, Image } from 'react-native';

import Helpers from '../../util/Helpers';
import styles from './styles';

const leftQuoteMark = require('./../../assets/images/quote/left-quote.png');
const rightQuoteMark = require('./../../assets/images/quote/right-quote.png');

const MQuote = ({ quote, children }) => {
  return (
    <View
      style={styles.quoteContainer}
    >
      <Text
        style={styles.quoteAuthor}
      >
        {quote.author}
      </Text>
      <Image
        source={leftQuoteMark}
        style={styles.leftQuote}
      />
      <Text
        numberOfLines={25}
        adjustsFontSizeToFit
        style={styles.quoteText}>

        {Helpers.capitalizeFirstLetter(quote.quote)}

      </Text>
      <Image
        source={rightQuoteMark}
        style={styles.rightQuote}
      />

      <Text
        style={styles.quoteAuthor}
      >
        {children} - {quote.book} - {quote.note}
      </Text>
    </View>
  );
};

MQuote.propTypes = {
  quote: PropTypes.object.isRequired,
  children: PropTypes.node,
};

export { MQuote };

