import {ROUTE_SCREEN} from '../../constant';
import {ProductList, Profile, MyBags, Checkout} from '../../screen/';
import {createStackNavigator} from 'react-navigation-stack';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {
  headerStyle,
  TextHeaderMargin,
  FlexRow,
  IconVector,
  marginIconAlign,
  headerStyleProfile,
} from '../../components';

export const MainLayouts = createStackNavigator({
  [ROUTE_SCREEN.MAIN_LAYOUT]: {
    screen: ProductList,
    navigationOptions: ({navigation}) => ({
      title: '',
      headerStyle: headerStyle,
      headerLeft: () => (
        <TextHeaderMargin>
          <FlexRow>
            <TouchableOpacity>
              <IconVector IconName="arrow-left" />
            </TouchableOpacity>
          </FlexRow>
        </TextHeaderMargin>
      ),
      headerRight: () => (
        <TextHeaderMargin>
          <FlexRow>
            <TouchableOpacity
              onPress={() => navigation.navigate(ROUTE_SCREEN.BAG_SCREEN)}>
              <IconVector IconName="shopping-bag" />
            </TouchableOpacity>
            <TouchableOpacity
              style={marginIconAlign}
              onPress={() => navigation.navigate(ROUTE_SCREEN.PROFILE_SCREEN)}>
              <IconVector IconName="align-justify" />
            </TouchableOpacity>
          </FlexRow>
        </TextHeaderMargin>
      ),
    }),
  },
  [ROUTE_SCREEN.PROFILE_SCREEN]: {
    screen: Profile,
    navigationOptions: ({navigation}) => ({
      title: '',
      headerStyle: headerStyleProfile,
      headerLeft: () => null,
      headerRight: () => (
        <TextHeaderMargin>
          <FlexRow>
            <TouchableOpacity
              onPress={() => navigation.navigate(ROUTE_SCREEN.BAG_SCREEN)}>
              <IconVector IconName="shopping-bag" />
            </TouchableOpacity>
            <TouchableOpacity
              style={marginIconAlign}
              onPress={() => navigation.navigate(ROUTE_SCREEN.MAIN_LAYOUT)}>
              <IconVector IconName="close" />
            </TouchableOpacity>
          </FlexRow>
        </TextHeaderMargin>
      ),
    }),
  },
  [ROUTE_SCREEN.BAG_SCREEN]: {
    screen: MyBags,
    navigationOptions: ({navigation}) => ({
      title: '',
      headerStyle: headerStyle,
      headerLeft: () => null,
      headerRight: () => (
        <TextHeaderMargin>
          <TouchableOpacity
            style={marginIconAlign}
            onPress={() => navigation.navigate(ROUTE_SCREEN.MAIN_LAYOUT)}>
            <IconVector IconName="close" />
          </TouchableOpacity>
        </TextHeaderMargin>
      ),
    }),
  },
  [ROUTE_SCREEN.CHECKOUT_SCREEN]: {
    screen: Checkout,
    navigationOptions: ({navigation}) => ({
      title: '',
      headerStyle: headerStyle,
      headerLeft: () => null,
      headerRight: () => (
        <TextHeaderMargin>
          <TouchableOpacity
            style={marginIconAlign}
            onPress={() => navigation.navigate(ROUTE_SCREEN.PROFILE_SCREEN)}>
            <IconVector IconName="align-justify" />
          </TouchableOpacity>
        </TextHeaderMargin>
      ),
    }),
  },
  initialRouteName: ROUTE_SCREEN.MAIN_LAYOUT,
});
