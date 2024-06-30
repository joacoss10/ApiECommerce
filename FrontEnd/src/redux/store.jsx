import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../redux/rootReducer';

const store = createStore(
    rootReducer
);

export default store;