import React from 'react';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {
  PaddingLR,
  FlexRow,
  backGroundProfile,
  ImageProfile,
  TextBold,
  marginRow,
  fontEmail,
  HeaderText,
  MarginBottom,
  MarginTop,
  FontSize,
  styleScollViewGlow,
} from '../../components';
import {ROUTE_SCREEN} from '../../constant';

export const Profile = props => {
  const Menu = ['Explore', 'Shop', 'Collection', 'Blog', 'Gallery', 'About'];
  const MenuBottom = ['Profile', 'Settings', 'Log out'];

  const Logout = () => {
    props.navigation.navigate(ROUTE_SCREEN.LOGIN_LAYOUT);
    AsyncStorage.removeItem('accessToken');
  };

  return (
    <View style={backGroundProfile}>
      <PaddingLR profile>
        <FlexRow flexStart>
          <Image
            source={{
              uri:
                'https://pbs.twimg.com/profile_images/1013780084258295808/68jxvhZY_400x400.jpg',
            }}
            style={ImageProfile}
          />
          <View style={marginRow}>
            <TextBold>Jason Moosa</TextBold>
            <Text style={fontEmail}>Jasonm@gmail.com</Text>
          </View>
        </FlexRow>
      </PaddingLR>
      <ScrollView contentContainerStyle={styleScollViewGlow}>
        <PaddingLR profile>
          <MarginTop px={40}>
            {Menu.map((val, i) => (
              <MarginBottom key={val + '_' + i} bottom={10}>
                <HeaderText>{val}</HeaderText>
              </MarginBottom>
            ))}
          </MarginTop>
          <MarginTop px={70}>
            {MenuBottom.map((val, i) => (
              <MarginBottom key={val + '_' + i} bottom={15}>
                <TouchableOpacity
                  onPress={() => (val === 'Log out' ? Logout() : null)}>
                  <FontSize size={16}>{val}</FontSize>
                </TouchableOpacity>
              </MarginBottom>
            ))}
          </MarginTop>
        </PaddingLR>
      </ScrollView>
    </View>
  );
};
