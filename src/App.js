import react,{useState} from "react";
//import { Fragment } from "react/cjs/react.production.min";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
const [cartIsShown,setCartIsShown]=useState(false);

const showCartHandler=()=>{
  setCartIsShown(true);
};

const hideCartHandler = () =>{
  setCartIsShown(false);
};
  return (
    <CartProvider>
    {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}></Header>
      <main>
      <Meals />
      </main>

    </CartProvider>
  );
}

export default App;
