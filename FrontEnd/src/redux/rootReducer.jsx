import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import clientReducer from './clientReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  client: clientReducer,
  stock: stockReducer
});

export default rootReducer;