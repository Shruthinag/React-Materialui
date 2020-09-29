import React, { useState } from "react";
import "./App.css";
import Products from "./components/ProductList";
import Cart from "./components/CartList";
import NavBar from "./components/NavBar";
import Toolbar from "@material-ui/core/Toolbar";

const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

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

      {page === PAGE_PRODUCTS && <Products cart={cart} setCart={setCart} />}
      {page === PAGE_CART && (
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
