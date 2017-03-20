import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

import Swiper from 'react-native-swiper';

import { MQuote, MArrow } from '../../commonComponents';

import { updateLikes } from '../../actions/quotes';

import { NAVBAR_HEIGHT } from '../../constants/styles';
import styles from './styles';

const likeButtonPressed = (_updateLikes, id, likes, liked) => {
  let updatedLikes = likes;
  if (liked) {
    updatedLikes = likes - 1;
  } else {
    updatedLikes = likes + 1;
  }

  _updateLikes(id, updatedLikes);
};

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
              liked={liked}
              onLikeButtonPressed={() => likeButtonPressed(_updateLikes, quote._id, quote.likes, quote.liked)}
            />
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
export default connect(mapStateToProps, { _updateLikes: updateLikes })(Quotes);
