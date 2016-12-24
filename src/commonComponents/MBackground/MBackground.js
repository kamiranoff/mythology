import React, { PropTypes } from 'react';
import { Image, View, ScrollView } from 'react-native';

import { styles } from './styles';

const bg = require('image!oldpaper');
const stars = require('image!stars');
//source={stars}

const MBackground = ({ children, scrollView }) => {
  let view = null;
  if (scrollView) {
    view = (
      <View  style={styles.mainContainer}>
        <ScrollView>
          <Image style={styles.bg}>
            {children}
          </Image>
        </ScrollView>
      </View>);
  } else {
    view = (<View style={styles.mainContainer}>
      <Image style={styles.bg}>
        {children}
      </Image>
    </View>);
  }
  return view;
};
MBackground.propTypes = {
  children: PropTypes.node.isRequired,
};

export { MBackground };
