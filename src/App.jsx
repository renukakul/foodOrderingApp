import Cart from "./Components/Cart";
import CheckoutForm from "./Components/CheckoutForm";
import Header from "./Components/Header";
import Meals from "./Components/Meals";
import { CartContextProvider } from "./store/Cartcontext";
import { UserProgressContextProvider } from "./store/UserProgressContext";

function App() {
  return (
    <div>
      <UserProgressContextProvider>
        <CartContextProvider>
        <Header/>
        <Meals/>
        <Cart/>
        <CheckoutForm/>
        </CartContextProvider>
      </UserProgressContextProvider>
    </div>
  );
}

export default App;
