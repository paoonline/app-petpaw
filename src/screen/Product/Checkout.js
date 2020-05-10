/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {ScrollView, View, Text} from 'react-native';
import {
  HeaderText,
  ButtonSubmit,
  IconVector,
  MarginBottom,
  styleScollViewGlow,
  flexColumn,
  flexTextColumn,
  PaddingLR,
} from '../../components';
import {ROUTE_SCREEN} from '../../constant';
import {ProductStoreContext} from '../../store';

export const Checkout = props => {
  const list = useContext(ProductStoreContext);
  const goToMain = () => {
    list.setBag([]);
    list.setTotalPrice(0);
    props.navigation.navigate(ROUTE_SCREEN.MAIN_LAYOUT);
  };

  return (
    <>
      <ScrollView contentContainerStyle={styleScollViewGlow}>
        <View style={flexColumn}>
          <View style={flexTextColumn}>
            <MarginBottom bottom={20}>
              <IconVector IconName="glass" size={30} />
            </MarginBottom>

            <View>
              <MarginBottom bottom={15}>
                <HeaderText style={{textAlign: 'center'}}>Congrat!</HeaderText>
              </MarginBottom>
              <Text>Thank you for purchasing. You order </Text>
              <Text>will be shipped in 2-4 working days</Text>
            </View>
          </View>
        </View>
        <MarginBottom style={{width: '100%'}} bottom={20}>
          <PaddingLR>
            <ButtonSubmit text="Continue Shopping" onPress={() => goToMain()} />
          </PaddingLR>
        </MarginBottom>
      </ScrollView>
    </>
  );
};
