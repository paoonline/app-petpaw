/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {ScrollView, View, Text, Alert} from 'react-native';
import {
  HeaderText,
  ButtonSubmit,
  styleScollViewGlow,
  MarginBottom,
  JustifyCenter,
  flexPadding,
  CardMyBag,
  FlexRow,
  FontGray,
  TextBold,
  MarginTop,
  TextHeaderMargin,
} from '../../components';
import {ROUTE_SCREEN} from '../../constant';
import {ProductStoreContext} from '../../store';
import {numberWithCommas} from '../../helper/functions';

export const MyBags = props => {
  const list = useContext(ProductStoreContext);
  const goToCheckout = () => {
    if (list.MyBag.length > 0) {
      props.navigation.navigate(ROUTE_SCREEN.CHECKOUT_SCREEN);
    } else {
      Alert.alert(
        'Alert Title',
        'Please select product',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    }
  };

  return (
    <>
      <TextHeaderMargin>
        <HeaderText set={40}>My Bag</HeaderText>
      </TextHeaderMargin>
      <View style={{flex: 1}}>
        <ScrollView contentContainerStyle={styleScollViewGlow}>
          <View style={flexPadding}>
            <MarginBottom bottom={10} />
            {list.MyBag.length > 0 ? (
              list.MyBag.map(val => <CardMyBag data={val} key={val.id} />)
            ) : (
              <FontGray size={18}>No Bag</FontGray>
            )}
            <MarginBottom bottom={20} />
            <FlexRow>
              <MarginTop px={3}>
                <FontGray size={16}>Total Amount</FontGray>
              </MarginTop>
              <TextBold size={20}>
                ${numberWithCommas(list.totalPrice)}
              </TextBold>
            </FlexRow>
            <MarginBottom bottom={80} />
          </View>
        </ScrollView>
        <View style={flexPadding}>
          <MarginBottom bottom={10}>
            <ButtonSubmit text="Check out" onPress={() => goToCheckout()} />
            <JustifyCenter>
              <Text>Continue Shopping</Text>
            </JustifyCenter>
          </MarginBottom>
        </View>
      </View>
    </>
  );
};
