import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Actions, Scene } from 'react-native-router-flux';

import Homepage from '../../Pages/Homepage';
import Loginpage from '../../Pages/Loginpage';
import Logoutpage from '../../Pages/Logoutpage';

import UserIcon from '../UserIcon/UserIcon';

const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{ color: selected ? 'red' : 'black' }}>{title}</Text>
  );
};

const style = StyleSheet.create({
  tabBarStyle: {
    borderTopWidth: .5,
    borderColor: '#b7b7b7',
    backgroundColor: 'white',
    opacity: 1,
  },
});

const Scenes = Actions.create(
  <Scene
    key="root"

  >
    <Scene
      key="tabbar"
      tabs={true}
      tabBarStyle={style.tabBarStyle}

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
          component={Homepage}
          title="Books"
          initial
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

export default Scenes;
