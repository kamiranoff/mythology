import React, { PropTypes } from 'react';
import { Image, View, ScrollView } from 'react-native';

import styles from './styles';

const MBackground = ({ children, scrollView, backgroundOverrideStyle }) => {
  let view = null;
  if (scrollView) {
    view = (
      <View style={[styles.mainContainer, backgroundOverrideStyle]}>
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
  scrollView: PropTypes.bool,
  backgroundOverrideStyle: PropTypes.object,
};

export { MBackground };
