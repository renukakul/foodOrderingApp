import { createContext, useReducer } from 'react';

// Create a context with initial values for the cart
const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

// Reducer function to manage the cart state based on different actions
function cartReducer(state, action) {
  if (action.type === 'ADD_ITEM') {
    // Find the index of the existing item in the cart
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    // Create a copy of the current items in the cart
    const updatedItems = [...state.items];

    if (existingCartItemIndex > -1) {
      // If the item already exists, update its quantity
      const existingItem = state.items[existingCartItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity : existingItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      // If the item is not in the cart, add it with quantity 1
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    // Return the updated state
    return { ...state, items: updatedItems };
  }

  if (action.type === 'REMOVE_ITEM') {
    // Find the index of the item to be removed in the cart
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    // Create a copy of the current items in the cart
    const updatedItems = [...state.items];

    if (existingCartItem.quantity === 1) {
      // If the item quantity is 1, remove it from the cart
      updatedItems.splice(existingCartItemIndex, 1);
    } else {
      // If the item quantity is more than 1, decrease its quantity
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    // Return the updated state
    return { ...state, items: updatedItems };
  }

  // If the action type is unknown, return the current state
  return state;
}

// CartContextProvider component that uses the CartContext and provides the state and actions to its children
export function CartContextProvider({ children }) {
  // Use the reducer to manage the state of the cart
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  // Function to add an item to the cart
  function addItem(item) {
    dispatchCartAction({ type: 'ADD_ITEM', item });
  }

  // Function to remove an item from the cart
  function removeItem(id) {
    dispatchCartAction({ type: 'REMOVE_ITEM', id });
  }

  // Context value containing the cart state and actions
  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
  };

  console.log(cartContext)

  // Provide the context value to the children components
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

// Export the CartContext
export default CartContext;
