import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { MBackground } from '../commonComponents';
import Quotes from '../components/Quotes/Quotes';


const Homepage = ({ quotes, liked }) => (
  <MBackground
  >
    <Quotes
      quotes={quotes}
      liked={liked}
    />
  </MBackground>
);

Homepage.propTypes = {
  quotes: PropTypes.array.isRequired,
  liked: PropTypes.bool.isRequired,
};

const mapStateToProps = ({
  quotes: { quotes },
  user: {liked},
}) => ({
  quotes,
  liked
});

// Render to the device
export default connect(mapStateToProps)(Homepage);
