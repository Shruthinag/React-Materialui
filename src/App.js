import React, { Component } from "react";

import "./App.css";
import ProductList from "./components/ProductList";

import NavBar from "./components/NavBar";

const products = [
  {
    id: 1,
    name: "Phone 1",
    description: "This phone sucks",
    img:
      "https://i.gadgets360cdn.com/products/large/1553055484_635_Samsung_Galaxy_A20_DB.jpg?downsize=*:180&output-quality=80",
    price: 100,
  },

  {
    id: 2,
    name: "Phone 2",
    description: "Trust Me",
    img:
      "https://rukminim1.flixcart.com/image/200/200/k8ddoy80/mobile/u/g/w/realme-narzo-10a-rmx2020-original-imafqechxsprgfgr.jpeg?q=70",
    price: 100,
  },

  {
    id: 3,
    name: "Phone 3",
    description: "It Really does",
    img:
      "https://rukminim1.flixcart.com/image/200/200/k8ddoy80/mobile/u/g/w/realme-narzo-10a-rmx2020-original-imafqechxsprgfgr.jpeg?q=70",
    price: 100,
  },

  {
    id: 4,
    name: "Phone 4 ",
    description: "Find a better work to do bro",
    img:
      "https://rukminim1.flixcart.com/image/200/200/k8ddoy80/mobile/u/g/w/realme-narzo-10a-rmx2020-original-imafqechxsprgfgr.jpeg?q=70",
    price: 100,
  },

  {
    id: 5,
    name: "Phone 5",
    description: "SAyi Magane",
    img:
      "https://rukminim1.flixcart.com/image/200/200/k8ddoy80/mobile/u/g/w/realme-narzo-10a-rmx2020-original-imafqechxsprgfgr.jpeg?q=70",
    price: 100,
  },
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      cart: [],
    };
  }
  render() {
    return (
      <div>
        <NavBar />
        {products.map((p) => (
          <ProductList key={p.id} {...p} />
        ))}
      </div>
    );
  }

  handleAddFunc(product) {
    const existingProductIndex = this.state.cart.findIndex(
      (p) => p.id === product.id
    );

    if (existingProductIndex >= 0) {
      const cartProducts = this.state.cart.slice();

      const existingProduct = cartProducts[existingProductIndex];

      const updatedUnitsProduct = {
        ...existingProduct,
        units: existingProduct.units + product.units,
      };

      cartProducts[existingProductIndex] = updatedUnitsProduct;

      this.setState({
        cart: cartProducts,
      });
    } else {
      this.setState({
        cart: [...this.state.cart, product],
      });
    }
  }

  render() {
    return (
      <main>
        <ul>
          {this.state.cart.map((c) => (
            <li>
              {c.name} | units {c.units}
            </li>
          ))}
          {/* <Button>Remove from cart</Button> */}
        </ul>

        {products.map((p) => (
          <ProductList
            key={p.id}
            {...p}
            addtoCart={this.handleAddFunc.bind(this)}
          />
        ))}
      </main>
    );
  }
}

export default App;
