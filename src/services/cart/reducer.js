import { ADD_PRODUCT, UPDATE_CART } from './actionTypes';

const initialState = {
  products: [],
  total: {
    productQuantity: 0,
    installments: 0,
    totalPrice: 0,
    currencyId: 'USD',
    currencyFormat: '$'
  },
  productToAdd: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        productToAdd: Object.assign({}, action.payload)
      };
    case UPDATE_CART:
      return {
        ...state,
        total: action.payload,
        productToAdd: null
      };
    default:
      return state;
  }
}
