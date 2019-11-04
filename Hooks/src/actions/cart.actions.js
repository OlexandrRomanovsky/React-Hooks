export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const ADD_CART_ITEM = 'ADD_CART_ITEM';
export const DECREMENT_CART_ITEM = 'DECREMENT_CART_ITEM';

export const addCartItem = payload => ({type: ADD_CART_ITEM, product: payload});
export const removeFromCart = payload => ({type: REMOVE_FROM_CART, id: payload});
export const decrementCartItem = payload => ({type: DECREMENT_CART_ITEM, product: payload});