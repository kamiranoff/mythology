import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { MBackground } from '../commonComponents';
import Quotes from '../components/Quotes/Quotes';

import { fetchRandomQuote } from '../actions/quotes';

const Homepage = ({ quotes, fetchRandomQuoteProp }) => (
  <MBackground>
    <Quotes
    quotes={quotes}
    />
  </MBackground>
);

Homepage.propTypes = {
  quotes: PropTypes.array.isRequired,
};

const mapStateToProps = ({
  quotes: { quotes },
}) => ({
  quotes,
});

// Render to the device
export default connect(mapStateToProps,
  { fetchRandomQuoteProp: fetchRandomQuote })(Homepage);
