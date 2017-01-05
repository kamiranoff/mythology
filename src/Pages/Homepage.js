import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { MBackground, MQuote } from '../commonComponents';

const Homepage = ({ quote }) => (
  <MBackground>
    <MQuote
      quote={quote.quote}
      author={quote.author}
      note={quote.note}
      book={quote.book}
    />
  </MBackground>
);

Homepage.propTypes = {
  quote: PropTypes.object.isRequired,

};

const mapStateToProps = ({
  quotes: { quote },
}) => ({
  quote,
});

// Render to the device
export default connect(mapStateToProps)(Homepage);
