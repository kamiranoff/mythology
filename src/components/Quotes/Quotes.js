import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

import Swiper from 'react-native-swiper';

import CounterContainer from '../../containers/CounterContainer';

import { MQuote, MArrow } from '../../commonComponents';

import { NAVBAR_HEIGHT } from '../../constants/styles';
import styles from './styles';

import { updatedQuotesLikes } from '../../actions/quotes';

const Quotes = ({ quotes, liked = false, _updateLikes }) => {
  return (
    <View>
      <Swiper
        showsButtons={true}
        loop={true}
        buttonWrapperStyle={{ marginTop: -NAVBAR_HEIGHT }}
        prevButton={
          <MArrow
            overrideStyleArrow={{ transform: [{ rotateY: '180deg' }] }}
          />
        }
        nextButton={<MArrow />}
      >
        {quotes.map((quote, i) => (
          <View key={i} style={styles.quotesContainer}>
            <MQuote
              quote={quote}
            >
              <CounterContainer
                liked={liked}
                quoteId={quote._id}
                likes={quote.likes}
              />
            </MQuote>
          </View>
        ))}
      </Swiper>
    </View>
  );
};

Quotes.propTypes = {
  quotes: PropTypes.array.isRequired,
  liked: PropTypes.bool.isRequired,
};

const mapStateToProps = ({
  quotes: { quotes },
  user: { liked },
}) => ({
  quotes,
  liked
});

// Render to the device
export default connect(mapStateToProps, { _updatedQuotesLikes: updatedQuotesLikes })(Quotes);
