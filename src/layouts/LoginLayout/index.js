import {ROUTE_SCREEN} from '../../constant';
import {Login} from '../../screen/';
import {createStackNavigator} from 'react-navigation-stack';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {headerStyle, TextHeaderMargin} from '../../components';

export const LoginLayouts = createStackNavigator({
  [ROUTE_SCREEN.LOGIN_LAYOUT]: {
    screen: Login,
    navigationOptions: {
      title: '',
      headerStyle: headerStyle,
      headerRight: () => (
        <TextHeaderMargin>
          <TouchableOpacity>
            <Text>Sign up</Text>
          </TouchableOpacity>
        </TextHeaderMargin>
      ),
    },
  },
});
