import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY, CLEAR_CART } from '../redux/actionTypes';

const initialState = {
  cartItems: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);

      if (existingItem){
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload.id ? { ...item, cantidad: action.payload.cantidad } : item
          )
        };
      }
      else{
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload]
      };
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload)
      };
    case UPDATE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload.itemId ? { ...item, cantidad: action.payload.quantity } : item
        )
      };
    case CLEAR_CART:
      return {
        ...state,
        cartItems: [] // Limpiar el arreglo de elementos del carrito
      };
      
    default:
      return state;
  }
};

export default cartReducer;