import React, { useState } from "react";
import "./App.css";
import Products from "./components/ProductList";
import Cart from "./components/CartList";
import NavBar from "./components/NavBar";
import Toolbar from "@material-ui/core/Toolbar";
import LoginScreen from "./screens/LoginScreen";

const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);
  const [loggedIn, setLoggedIn] = useState(false);

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const getCartTotal = () => {
    return cart.reduce((sum, { quantity }) => sum + quantity, 0);
  };

  return (
    <div className="App">
      <NavBar
        cartTotal={getCartTotal()}
        onClick={() => navigateTo(PAGE_CART)}
      />
      <Toolbar id="back-to-top-anchor" />
      {!loggedIn && <LoginScreen logIn={() => setLoggedIn(true)} />}
      {page === PAGE_PRODUCTS && loggedIn && (
        <Products cart={cart} setCart={setCart} />
      )}
      {page === PAGE_CART && loggedIn && (
        <Cart
          cart={cart}
          setCart={setCart}
          productsOnCLick={() => navigateTo(PAGE_PRODUCTS)}
        />
      )}
    </div>
  );
}

export default App;
