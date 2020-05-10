import React, {useState, createContext, useEffect} from 'react';
export const ProductStoreContext = createContext();
import {api_product_list} from '../service/api';
import AsyncStorage from '@react-native-community/async-storage';

export const ProductContextProvider = props => {
  const [listProduct, setListProduct] = useState([]);
  const [MyBag, setBag] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const checkAccessToken = async () => {
    try {
      const value = await AsyncStorage.getItem('accessToken');
      if (value) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      // error reading value
      return false;
    }
  };

  useEffect(() => {
    if (checkAccessToken) {
      api_product_list().then(val => setListProduct(val.data));
    }
  }, []);

  return (
    <ProductStoreContext.Provider
      value={{
        listProduct,
        setListProduct,
        MyBag,
        setBag,
        totalPrice,
        setTotalPrice,
      }}>
      {props.children}
    </ProductStoreContext.Provider>
  );
};
