import React, { useState } from "react";
import PCard from "./PCard";

const Redmi_Note = "Redmi Note";
const MI_PHONES = "MI Phones";

export default function Products({ setCart, cart }) {
  const [products] = useState([
    {
      category: MI_PHONES,
      id: 1042,
      name: "Premium Chiroti-25kg.png",
      description: "",
      image: require("../assets/PremiumChiroti-25kg.png"),
      cost: 1035,
      ratings: "3.5",
    },

    {
      category: MI_PHONES,
      id: 1043,
      name: "ice-Special Maida-50kg",
      description: " ",
      image: require("../assets/ice-SpecialMaida-50kg.png"),
      cost: 1890,
      ratings: "4",
    },

    {
      category: MI_PHONES,
      id: 1044,
      name: "Orange Premium Maida-50kg",
      description: "",
      image: require("../assets/Orange-Premium-Maida-50kg.png"),
      cost: 1980,
      ratings: "4.8",
    },

    {
      category: Redmi_Note,
      id: 1045,
      name: "Premium Chiroti-50kg",
      description: "6 GB RAM | 128 GB ROM | Expandable Upto 512 GB",
      image: require("../assets/PremiumChiroti-50kg.png"),
      cost: 2070,
      ratings: "3.2",
    },

    {
      category: Redmi_Note,
      id: 1046,
      name: "Premium Maida 25kg",
      description: "4 GB RAM | 64 GB ROM | Expandable Upto 512 GB",
      image: require("../assets/Premium-Maida25kg.png"),
      cost: 1080,
      ratings: "3.5",
    },
    {
      category: Redmi_Note,
      id: 1047,
      name: "Premium Maida-50kg",
      description: "6 GB RAM | 128 GB ROM",
      image: require("../assets/Premium-Maida-50kg.png"),
      cost: 1980,
      ratings: "4",
    },
    {
      category: Redmi_Note,
      id: 1048,
      name: "Premium R Atta 25kg",
      description: "",
      image: require("../assets/Premium-R-Atta-25kg.png"),
      cost: 900,
      ratings: "4",
    },
    {
      category: Redmi_Note,
      id: 1049,
      name: "Premium R Atta 50kg",
      description: "",
      image: require("../assets/Premium-R-Atta-50kg.png"),
      cost: 1800,
      ratings: "4",
    },
    {
      category: Redmi_Note,
      id: 1050,
      name: "Premium Suji 25kg",
      description: "",
      image: require("../assets/Premium-Suji-25kg.png"),
      cost: 1080,
      ratings: "4",
    },
    {
      category: Redmi_Note,
      id: 1051,
      name: "Premium Suji 50kg",
      description: "",
      image: require("../assets/Premium-Suji-50kg.png"),
      cost: 2070,
      ratings: "4",
    },
    {
      category: Redmi_Note,
      id: 1052,
      name: "Special Maida 25kg",
      description: "",
      image: require("../assets/Special-Maida-25kg.png"),
      cost: 450,
      ratings: "4",
    },
    {
      category: Redmi_Note,
      id: 1053,
      name: "Special Maida 50kg",
      description: "",
      image: require("../assets/Special-Maida-50kg.png"),
      cost: 1035,
      ratings: "4",
    },
  ]);

  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find((item) => product.name === item.name);
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  const [category, setCategory] = useState(Redmi_Note);

  const getProductsInCategory = () => {
    return products.filter((product) => product.category === category);
  };

  return (
    <>
      {/* <h1>Products</h1>
      Select a category
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value={Redmi_Note}>{Redmi_Note}</option>
        <option value={MI_PHONES}>{MI_PHONES}</option>
      </select> */}
      <div className="products">
        {products.map((product, idx) => (
          // <div className="product" key={idx}>
          //   <h3>{product.name}</h3>
          //   <h4>${product.cost}</h4>
          //   <img src={product.image} alt={product.name} />
          //   <button onClick={() => addToCart(product)}>Add to Cart</button>
          // </div>
          <PCard
            id={product.id}
            key={idx}
            name={product.name}
            description={product.description}
            img={product.image}
            price={product.cost}
            onClick={() => addToCart(product)}
            rating={product.ratings}
          />
        ))}
      </div>
    </>
  );
}
