import React from 'react';
import {FlexRow} from '../components';
import {imageBadge, marginRowCard} from './styleObject';
import {
  FlexProductStyle,
  CardImageBag,
  Hr,
  TextBold,
  FontDescription,
  FlexIncrest,
  IconIncrest,
  IconCenter,
} from './styleComponent';
import {ProductStoreContext} from '../store';
import {View, Text, Image} from 'react-native';
import {calMyBag, numberWithCommas} from '../helper/functions';

export const CardMyBag = props => (
  <>
    <FlexRow>
      <FlexRow flexStart>
        <CardImageBag>
          <FlexProductStyle>
            <Image
              source={{
                uri: props.data.imageUrl,
              }}
              style={imageBadge}
            />
          </FlexProductStyle>
        </CardImageBag>
        <View>
          <View style={marginRowCard}>
            <View>
              <TextBold size={16}>{props.data.productName}</TextBold>
              <Text>${numberWithCommas(props.data.price)}</Text>
            </View>
            <FontDescription size={14}>Color: Cherry</FontDescription>
          </View>
        </View>
      </FlexRow>
      <ProductStoreContext.Consumer>
        {store => (
          <FlexIncrest>
            <IconIncrest onPress={() => calMyBag(props.data, store, 'minus')}>
              <IconCenter name="minus" />
            </IconIncrest>
            <TextBold size={20}>{numberWithCommas(props.data.amount)}</TextBold>
            <IconIncrest onPress={() => calMyBag(props.data, store)}>
              <IconCenter name="plus" />
            </IconIncrest>
          </FlexIncrest>
        )}
      </ProductStoreContext.Consumer>
    </FlexRow>
    <Hr />
  </>
);
