import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import { updatedQuotesLikes } from '../actions/quotes';
import { MCounter } from '../commonComponents';

class CounterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteLikes: props.likes
    };

    this._onLikeButtonPressed = this._onLikeButtonPressed.bind(this);
  }

  _onLikeButtonPressed() {
    const { likes, quoteId, liked } = this.props;
    let quoteLikes = likes;
    if (liked) {
      quoteLikes = likes - 1;
    } else {
      quoteLikes = likes + 1;
    }
    this.setState({ quoteLikes });
    this.props.updatedQuotesLikes(quoteId, quoteLikes);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.error) {
      this.setState({ quoteLikes: this.props.likes});
    }
  }

  render() {
    return (
      <MCounter
        liked={this.props.liked}
        likes={this.state.quoteLikes}
        onLikeButtonPressed={this._onLikeButtonPressed}
      />
    );
  }

}

CounterContainer.propTypes = {
  likes: PropTypes.number.isRequired,
  liked: PropTypes.bool.isRequired,
  quoteId: PropTypes.string.isRequired
};

const mapStateToProps = ({
  quotes: { error }
}) => ({
  error,
});

export default connect(
  mapStateToProps,
  { updatedQuotesLikes }
)(CounterContainer);
