import React from "react";

import CountButton from "./CountButton";

export default function Cart({ cart, setCart, productsOnCLick }) {
  const getTotalSum = () => {
    return cart.reduce((sum, { cost, quantity }) => sum + cost * quantity, 0);
  };

  const clearCart = () => {
    setCart([]);
  };

  const setQuantity = (product, amount) => {
    const newCart = [...cart];
    newCart.find((item) => item.name === product.name).quantity = amount;
    setCart(newCart);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  return (
    <>
      <header>
        {/* <button onClick={() => navigateTo(PAGE_CART)}>
          Go to Cart ({getCartTotal()})
        </button> */}
        <button onClick={productsOnCLick}>View Products</button>
      </header>

      <h1>Cart</h1>
      {cart.length > 0 && <button onClick={clearCart}>Clear Cart</button>}
      <div className="products">
        {cart.map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>₹{product.cost}</h4>
            {/* <input
              size={4}
              value={product.quantity}
              onChange={(e) => setQuantity(product, parseInt(e.target.value))}
            /> */}
            <CountButton value={product.quantity} />
            <img height={100} src={product.image} alt={product.name} />
            <button onClick={() => removeFromCart(product)}>Remove</button>
          </div>
        ))}
      </div>
      <br />
      <h4>Total Cost: ₹{getTotalSum()}</h4>
    </>
  );
}
