import React from "react";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import CartPCard from "./CartPCard";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Cart({ cart, setCart, productsOnCLick }) {
  const classes = useStyles();
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

  const increaseQuantity = (product) => {
    const newCart = [...cart];
    newCart.find((item) => item.name === product.name).quantity++;
    setCart(newCart);
  };

  const decreaseQuantity = (product) => {
    const newCart = [...cart];
    newCart.find((item) => item.name === product.name).quantity--;
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
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<ArrowBackIcon />}
          onClick={productsOnCLick}
        >
          Back to Products
        </Button>
        {/* <button onClick={productsOnCLick}>View Products</button> */}
      </header>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Paper elevation={3}>
            <h1>Shopping Cart</h1>
            <h3>Total Cost: ₹{getTotalSum()}</h3>
            {cart.length > 0 && (
              <Button variant="contained" color="primary">
                Checkout
              </Button>
            )}
            {cart.length > 0 && (
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                onClick={clearCart}
              >
                Clear Cart
              </Button>
            )}
            <div className="products">
              {cart.map((product, idx) => (
                <CartPCard
                  key={idx}
                  name={product.name}
                  description={product.cost}
                  img={product.image}
                  price={product.cost}
                  rating={product.quantity}
                  quantity={product.quantity}
                  onRemoveClick={() => removeFromCart(product)}
                  incrementClick={() => increaseQuantity(product)}
                  decrementClick={() => decreaseQuantity(product)}
                />
              ))}
            </div>
          </Paper>
        </Container>
      </React.Fragment>

      <br />
    </>
  );
}
