// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './homeSlice';
import cartReducer from './cartSlice'; // Import the cart reducer

const store = configureStore({
  reducer: {
    home: homeReducer,
    cart: cartReducer, // Add the cart reducer to the store
  },
});

export default store;
