import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../redux/cartReducer';

const store = createStore(
    rootReducer
);

export default store;