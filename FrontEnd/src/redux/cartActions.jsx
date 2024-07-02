import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY, CLEAR_CART, UPDATE_TOTAL } from './actionTypes';

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item
});

export const removeFromCart = (itemId) => ({
  type: REMOVE_FROM_CART,
  payload: itemId
});

export const updateQuantity = (itemId, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { itemId, quantity }
});

export const clearCart = () => ({
  type: CLEAR_CART
});

export const updateTotal = (total) => ({ 
  type: UPDATE_TOTAL,
  payload: total
});

  