import Header from "./Components/Header";
import Meals from "./Components/Meals";
import { CartContextProvider } from "./store/Cartcontext";

function App() {
  return (
    <div>
      <CartContextProvider>
      <Header/>
      <Meals/>
      </CartContextProvider>
    </div>
  );
}

export default App;
