const initialState = {
    token: null,
    username: ''
  };
  
  const clientReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_TOKEN':
        return {
          ...state,
          token: action.payload
        };
      case 'SET_USERNAME':
        return {
          ...state,
          username: action.payload
        };
      default:
        return state;
    }
  };
  
  export default clientReducer;