import { SET_TOKEN } from '../redux/actionTypes';

const initialState = {
    token: null,
  };
  
  const clientReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_TOKEN:
        return {
          ...state,
          token: action.payload
        };
      
      default:
        return state;
    }
  };
  
  export default clientReducer;