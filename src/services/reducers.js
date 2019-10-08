import { combineReducers } from 'redux';
import shelfReducer from './shelf/reducer';
import cartReducer from './cart/reducer';

export default combineReducers({
  shelf: shelfReducer,
  cart: cartReducer
});
