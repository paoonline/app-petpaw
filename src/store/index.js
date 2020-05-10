import React, {useState, createContext, useEffect} from 'react';
export const ProductStoreContext = createContext();
import {api_product_list} from '../service/api';
import AsyncStorage from '@react-native-community/async-storage';

export const ProductContextProvider = props => {
  const [listProduct, setListProduct] = useState([]);
  const [MyBag, setBag] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [token, setToken] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('accessToken').then(val => {
      val && api_product_list().then(vals => setListProduct(vals.data));
    });
  }, [token]);

  return (
    <ProductStoreContext.Provider
      value={{
        listProduct,
        setListProduct,
        MyBag,
        setBag,
        totalPrice,
        setTotalPrice,
        setToken,
      }}>
      {props.children}
    </ProductStoreContext.Provider>
  );
};
