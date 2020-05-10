/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {
  CardProductStyle,
  PaddingLR,
  HeaderText,
  FontDescription,
  FlexRow,
  FlexProductStyle,
  MarginTop,
  FontSize,
  MarginBottom,
} from './styleComponent';
import {buttonShadow, imageProduct, flexPadding} from './styleObject';
import {IconVector} from './IconVector';
import {numberWithCommas} from '../helper/functions';

export const CardProduct = props => (
  <>
    <CardProductStyle style={buttonShadow}>
      <FlexProductStyle>
        <Image
          source={{
            uri: props.data.imageUrl,
          }}
          style={imageProduct}
        />
      </FlexProductStyle>
      <View style={flexPadding}>
        <HeaderText set={18}>{props.data.productName}</HeaderText>
        <FontDescription>{props.data.productDescription}</FontDescription>
      </View>
      <MarginTop px={10}>
        <PaddingLR>
          <FlexRow>
            <FontSize size={20} style={{marginTop: -2}}>
              ${numberWithCommas(props.data.price)}
            </FontSize>
            <TouchableOpacity onPress={props.onPress}>
              <IconVector IconName="shopping-bag" color={'#c7c7c8'} />
            </TouchableOpacity>
          </FlexRow>
        </PaddingLR>
      </MarginTop>
      <MarginBottom bottom={10} />
    </CardProductStyle>
  </>
);
