import React, { PropTypes } from 'react';
import { Text } from 'react-native';
import { Actions, Scene } from 'react-native-router-flux';

import Homepage from '../../Pages/Homepage';
import SingleHeropage from '../../Pages/SingleHeropage/SingleHeropage';
import BookListpage from '../../Pages/BookListpage';
import SingleBookpage from '../../Pages/SingleBookpage/SingleBookpage';
import Loginpage from '../../Pages/Loginpage';
import Logoutpage from '../../Pages/Logoutpage';

import UserIcon from '../UserIcon/UserIcon';

import { TEXT_2, TEXT_SELECTED_1 } from '../../constants/styles';

import styles from './styles';

const TabIcon = ({ selected, title }) => (
  <Text style={{ color: selected ? TEXT_SELECTED_1 : TEXT_2 }}>{title}</Text>
);


const Scenes = Actions.create(
  <Scene
    key="root"

  >
    <Scene
      key="tabbar"
      tabs
      tabBarStyle={styles.tabBarStyle}

    >
      <Scene
        key="home"
        title="Pantheon"
        icon={TabIcon}
      >
        <Scene
          key="homepage"
          component={Homepage}
          title="Pantheon"
          initial
          renderRightButton={() => <UserIcon />}
        />
        <Scene
          key="singleHeroPage"
          component={SingleHeropage}
          renderRightButton={() => <UserIcon />}
        />
      </Scene>
      <Scene
        key="gods"
        title="Gods"
        icon={TabIcon}
      >
        <Scene
          key="godsPage"
          component={Homepage}
          title="Gods"
          initial
          renderRightButton={() => <UserIcon />}
        />
      </Scene>
      <Scene
        key="books"
        title="Books"
        icon={TabIcon}
      >
        <Scene
          key="booksPage"
          component={BookListpage}
          title="Books"
          initial
          renderRightButton={() => <UserIcon />}
        />
        <Scene
          key="singleBookPage"
          component={SingleBookpage}
          renderRightButton={() => <UserIcon />}
        />
      </Scene>
    </Scene>
    <Scene
      key="login"
      title="Login"
      component={Loginpage}
      renderRightButton={() => <UserIcon />}
    />
    <Scene
      key="logout"
      title="Logout"
      component={Logoutpage}
      renderRightButton={() => <UserIcon />}
    />
  </Scene>,
);

TabIcon.propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

export default Scenes;
