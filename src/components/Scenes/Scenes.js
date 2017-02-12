import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';

import Homepage from '../../Pages/Homepage';
import GreekListpage from '../../Pages/GreekListpage';
import SingleHeropage from '../../Pages/SingleHeropage/SingleHeropage';
import BookListpage from '../../Pages/BookListpage';
import SingleBookpage from '../../Pages/SingleBookpage/SingleBookpage';
import Loginpage from '../../Pages/Loginpage';
import Logoutpage from '../../Pages/Logoutpage';

import UserIcon from '../UserIcon/UserIcon';
import TabIcon from '../TabIcon/TabIcon';

import styles from './styles';

const Scenes = Actions.create(
  <Scene
    key="root"
  >
    <Scene
      key="tabbar"
      tabs
      tabBarStyle={styles.tabBarStyle}
      tabBarIconContainerStyle={{height: null, padding: 10}}
    >
      {/* Homepage */}
      <Scene
        key="home"
        title="Quotes"
        icon={TabIcon}
        navigationBarStyle={styles.navbarStyleWidthShadow}
      >
        <Scene
          key="homepage"
          component={Homepage}
          title="Quotes"
          initial
          renderRightButton={() => <UserIcon />}
        />
      </Scene>
      {/* GreekList page */}
      <Scene
        key="greeks"
        title="Pantheon"
        icon={TabIcon}
      >
        <Scene
          key="greekListPage"
          component={GreekListpage}
          title="Pantheon"
          initial
          renderRightButton={() => <UserIcon />}
          navigationBarStyle={styles.navbarStyle}
        />
        <Scene
          key="singleHeroPage"
          component={SingleHeropage}
          renderRightButton={() => <UserIcon />}
          navigationBarStyle={[styles.navbarStyleWidthShadow, styles.extraShadow]}
        />
      </Scene>
      {/* Books page */}
      <Scene
        key="books"
        title="Books"
        icon={TabIcon}
        navigationBarStyle={styles.navbarStyle}
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
      navigationBarStyle={styles.navbarStyleWidthShadow}
    />
    <Scene
      key="logout"
      title="Logout"
      component={Logoutpage}
      renderRightButton={() => <UserIcon />}
      navigationBarStyle={styles.navbarStyleWidthShadow}
    />
  </Scene>
);

export default Scenes;
