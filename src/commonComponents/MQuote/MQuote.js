import React, { Component, PropTypes } from 'react';
import { View, Text, Image } from 'react-native';

import Helpers from '../../util/Helpers';
import { MCounter } from '../index';
import styles from './styles';

const leftQuoteMark = require('./../../assets/images/quote/left-quote.png');
const rightQuoteMark = require('./../../assets/images/quote/right-quote.png');

class MQuote extends Component {

  constructor(props) {
    super(props);

    this.state = {
      quoteLikes: props.quote.likes
    };
  }

  _onLikeButtonPressed(liked, likes) {
    let quoteLikes = likes;
    if (liked) {
      quoteLikes = likes - 1;
    } else {
      quoteLikes = likes + 1;
    }

    this.setState({ quoteLikes });
    this.props.onLikeButtonPressed(!liked);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ quoteLikes: nextProps.quote.likes });
  }

  render() {
    const { quote, liked } = this.props;
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
          <MCounter
            likes={this.state.quoteLikes}
            onPressed={() => this._onLikeButtonPressed(liked, this.state.quoteLikes)}
            liked={liked}
          /> - {quote.book} - {quote.note}
        </Text>
      </View>
    );
  }
}

MQuote.propTypes = {
  quote: PropTypes.object.isRequired,
  onLikeButtonPressed: PropTypes.func.isRequired,
  liked: PropTypes.bool.isRequired,
};

export { MQuote };

