import { createStore } from 'redux';
import cartReducer from '../redux/cartReducer';

const store = createStore(cartReducer);

export default store;