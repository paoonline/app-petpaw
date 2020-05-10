import React, {useState, useEffect, useContext} from 'react';
import {ScrollView, TouchableOpacity, View, Text} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {
  HeaderText,
  PaddingLR,
  styleScollView,
  FlexRow,
  MarginTop,
  CardProduct,
  flexCardProduct,
  styleScollViewGlow,
} from '../../components';
import {ROUTE_SCREEN} from '../../constant';
import {ProductStoreContext} from '../../store';
import {calMyBag} from '../../helper/functions';
export const ProductList = props => {
  const list = useContext(ProductStoreContext);
  const [productType, setProductType] = useState([]);
  const tabList = ['Chairs', 'Tables', 'Sofa', 'Bed'];
  const [activeTab, setActiveTab] = useState('Chairs');

  const handleActive = tab => {
    setActiveTab(tab);
  };

  const gotoBag = async data => {
    calMyBag(data, list);
    props.navigation.navigate(ROUTE_SCREEN.BAG_SCREEN);
  };

  useEffect(() => {
    if (
      list.listProduct.hasOwnProperty('product') &&
      list.listProduct.product.length > 0
    ) {
      const findType = list.listProduct.product[0][activeTab];
      setProductType(findType);
    }
  }, [activeTab, list.listProduct]);

  return (
    <>
      <PaddingLR>
        <ScrollView horizontal={true} contentContainerStyle={styleScollView}>
          {tabList.map((val, i) => (
            <TouchableOpacity
              key={val + '_' + i}
              onPress={() => handleActive(val)}>
              {activeTab === val ? (
                <HeaderText>{val}</HeaderText>
              ) : (
                <HeaderText active>{val}</HeaderText>
              )}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </PaddingLR>
      <ScrollView contentContainerStyle={styleScollViewGlow}>
        <PaddingLR>
          <MarginTop px={20}>
            <FlexRow>
              <MarginTop px={4}>
                <Text>{productType.length} products</Text>
              </MarginTop>
              <Picker
                selectedValue={'Popular'}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{height: 20, width: 120}}
                onValueChange={(itemValue, itemIndex) => {}}>
                <Picker.Item label="Popular" value="Popular" />
              </Picker>
            </FlexRow>
          </MarginTop>
          <View style={flexCardProduct}>
            {productType.map(val => (
              <CardProduct
                key={val.id}
                onPress={() => gotoBag(val)}
                data={val}
              />
            ))}
          </View>
        </PaddingLR>
      </ScrollView>
    </>
  );
};
