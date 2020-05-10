/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {AppNavigator} from './AppNavigator';
import {ProductContextProvider} from './store';

const App: () => React$Node = () => {
  return (
    <>
      <ProductContextProvider>
        <AppNavigator />
      </ProductContextProvider>
    </>
  );
};

export default App;
