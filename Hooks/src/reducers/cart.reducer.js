import {
  ADD_CART_ITEM,
  REMOVE_FROM_CART,
  DECREMENT_CART_ITEM
} from '../actions/cart.actions';

const initState = [];

export default (state = initState, action) => {
  switch (action.type) {
  case ADD_CART_ITEM:
    const index = state.findIndex(item => item.id === action.product.id);
    if (index !== -1) {
      ++state[index].amount;
      return [...state];
    }

    const newCartItem = {
      name: action.product.name,
      price: action.product.price,
      id: action.product.id,
      amount: 1,
      available: action.product.available
    };
    return [...state, newCartItem];

  case REMOVE_FROM_CART:
    return state.filter(item => item.id !== action.id);

  case DECREMENT_CART_ITEM:
    let indexAvailable = state.indexOf(action.product);
    if (indexAvailable !== -1) {
      --state[indexAvailable].amount;
      return [...state];
    }

  default:
    return state;
  }
};
