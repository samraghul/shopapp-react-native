import React from 'react';
import { StatusBar } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import productsReducer from './state/reducers/Products';
import cartReducer from './state/reducers/Cart';

import ShopNavigator from './navigators/ShopNavigator';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar />
      <ShopNavigator />
    </Provider>
  );
}
