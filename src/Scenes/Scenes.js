import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Actions, Scene } from 'react-native-router-flux';

import Homepage from '../Pages/Homepage';
import Loginpage from '../Pages/Loginpage';

const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{ color: selected ? 'red' : 'black' }}>{title}</Text>
  );
};

const profile = require('image!helmetbw');

const goToLogin = () => {
  Actions.login({ type: 'push' });
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
        rightButtonImage={profile}
        onRight={() => {
          goToLogin();
        }}
        rightButtonIconStyle={{ width: 30, height: 30 }}
      >
        <Scene
          key="homepage"
          component={Homepage}
          title="Pantheon"
          initial
        />
      </Scene>
      <Scene
        key="gods"
        title="Gods"
        icon={TabIcon}
        rightButtonImage={profile}
        onRight={() => {
          goToLogin();
        }}
        rightButtonIconStyle={{ width: 30, height: 30 }}
      >
        <Scene
          key="godsPage"
          component={Homepage}
          title="Gods"
          initial
        />
      </Scene>
      <Scene
        key="books"
        title="Books"
        icon={TabIcon}
        rightButtonImage={profile}
        onRight={() => {
          goToLogin();
        }}
        rightButtonIconStyle={{ width: 30, height: 30 }}
      >
        <Scene
          key="booksPage"
          component={Homepage}
          title="Books"
          initial
        />
      </Scene>
    </Scene>
    <Scene
      key="login"
      title="Login"
      component={Loginpage}
      rightButtonImage={profile}
      onRight={() => {
        goToLogin();
      }}
      rightButtonIconStyle={{ width: 30, height: 30 }}
    />
  </Scene>,
);

export default Scenes;
