export const GET_PRODUCT_LIST = 'GET_PRODUCT_LIST';
export const ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT';
export const DECREES_AVAILABLE = 'DECREES_AVAILABLE';
export const INCREASE_AVAILABLE = 'INCREASE_AVAILABLE';
export const INCREASE_AVAILABLE_DELETED = 'INCREASE_AVAILABLE_DELETED';

//JSON file should be in public folder
export const getProductList = () => dispatch => {
  fetch('/prodList.json')
    .then(res => res.json())
    .then(products =>
      dispatch({
        type: GET_PRODUCT_LIST,
        payload: products
      })
    )
    .catch(function(err) {
      alert(`Fetch error: ${err}`);
    });
};

export const addNewProduct = payload => ({
  type: ADD_NEW_PRODUCT,
  product: payload
});

export const decreesOfAvailable = payload => ({
  type: DECREES_AVAILABLE,
  product: payload
});

export const increaseOfAvailable = payload => ({
  type: INCREASE_AVAILABLE,
  product: payload
});

export let increaseOfAvailableDeleted = payload => ({
  type: INCREASE_AVAILABLE_DELETED,
  product: payload
});
