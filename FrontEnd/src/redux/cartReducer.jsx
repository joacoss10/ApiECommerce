const initialState = {
    cartItems: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        // Lógica para agregar un producto al carrito
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      case 'REMOVE_FROM_CART':
        // Lógica para eliminar un producto del carrito
        return {
          ...state,
          cartItems: state.cartItems.filter(item => item.id !== action.payload),
        };
      case 'CLEAR_CART':
        // Lógica para limpiar el carrito
        return {
          ...state,
          cartItems: [],
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;