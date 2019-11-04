import {
  GET_PRODUCT_LIST,
  ADD_NEW_PRODUCT,
  DECREES_AVAILABLE,
  INCREASE_AVAILABLE,
  INCREASE_AVAILABLE_DELETED
} from "../actions/products.action";

const initState = {
  products: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case GET_PRODUCT_LIST:
      return {
        ...state,
        products: action.payload
      };
    case ADD_NEW_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.product]
      };
    case DECREES_AVAILABLE:
      const indexAvailable = state.products.findIndex(
        item => action.product.id === item.id
      );
      if (indexAvailable !== -1) {
        --state.products[indexAvailable].available;
        return { ...state };
      }
    case INCREASE_AVAILABLE:
      const index = state.products.findIndex(
        item => action.product.id === item.id
      );
      if (index !== -1) {
        ++state.products[index].available;
        return { ...state };
      }

    case INCREASE_AVAILABLE_DELETED:
        const ind = state.products.findIndex(
          item => action.product.id === item.id
        );
        if(ind !== -1) {
          state.products[ind].available +=action.product.amount;
          return { ...state };
        }

    default:
      return state;
  }
};