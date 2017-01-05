import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const MQuote = ({ quote, author, book, note }) => (
  <View
    style={styles.quoteContainer}
  >
    <Text style={styles.quoteText} >
      {quote}
    </Text>
    <Text style={styles.quoteAuthor} >
      {author} - {book} - {note}
    </Text>
  </View>
);

MQuote.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  book: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired,
};

export { MQuote };

