// Import necessary dependencies from React
import { createContext, useState } from 'react';

// Create a context with initial values and methods related to user progress
const UserProgressContext = createContext({
  progress: '', // 'cart', 'checkout'
  showCart: () => {}, // Function to show the cart
  hideCart: () => {}, // Function to hide the cart
  showCheckout: () => {}, // Function to show the checkout
  hideCheckout: () => {}, // Function to hide the checkout
});

// Create a provider component to wrap around the application
export function UserProgressContextProvider({ children }) {
  // State to manage the user's progress
  const [userProgress, setUserProgress] = useState('');

  // Function to set the user's progress to 'cart'
  function showCart() {
    setUserProgress('cart');
  }

  // Function to reset the user's progress (hide the cart)
  function hideCart() {
    setUserProgress('');
  }

  // Function to set the user's progress to 'checkout'
  function showCheckout() {
    setUserProgress('checkout');
  }

  // Function to reset the user's progress (hide the checkout)
  function hideCheckout() {
    setUserProgress('');
  }

  // Context value containing user progress and related functions
  const userProgressCtx = {
    progress: userProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };

  // Provide the context value to the entire application
  return (
    <UserProgressContext.Provider value={userProgressCtx}>
      {children}
    </UserProgressContext.Provider>
  );
}

// Export the UserProgressContext for use in other components
export default UserProgressContext;
