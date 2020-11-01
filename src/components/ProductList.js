import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PCard from "./PCard";
import Filters from "./Filters";

const Redmi_Note = "Redmi Note";
const MI_PHONES = "MI Phones";
const ALL = "All";
const CHIROTI = "Chiroti";
const ATTA = "Atta";
const MAIDA = "Maida";
const SUJI = "Suji";

export default function Products({ setCart, cart }) {
  const [products] = useState([
    {
      category: CHIROTI,
      weightInKgs: "25",
      id: 1042,
      name: "Premium Chiroti-25kg.png",
      description: "",
      image: require("../assets/PremiumChiroti-25kg.png"),
      cost: 1035,
      ratings: "3.5",
    },

    {
      category: MAIDA,
      weightInKgs: "50",
      id: 1043,
      name: "ice-Special Maida-50kg",
      description: " ",
      image: require("../assets/ice-SpecialMaida-50kg.png"),
      cost: 1890,
      ratings: "4",
    },

    {
      category: MAIDA,
      weightInKgs: "50",
      id: 1044,
      name: "Orange Premium Maida-50kg",
      description: "",
      image: require("../assets/Orange-Premium-Maida-50kg.png"),
      cost: 1980,
      ratings: "4.8",
    },

    {
      category: CHIROTI,
      weightInKgs: "50",
      id: 1045,
      name: "Premium Chiroti-50kg",
      description: "",
      image: require("../assets/PremiumChiroti-50kg.png"),
      cost: 2070,
      ratings: "3.2",
    },

    {
      category: MAIDA,
      weightInKgs: "25",
      id: 1046,
      name: "Premium Maida 25kg",
      description: "",
      image: require("../assets/Premium-Maida25kg.png"),
      cost: 1080,
      ratings: "3.5",
    },
    {
      category: MAIDA,
      weightInKgs: "50",
      id: 1047,
      name: "Premium Maida-50kg",
      description: "6 GB RAM | 128 GB ROM",
      image: require("../assets/Premium-Maida-50kg.png"),
      cost: 1980,
      ratings: "4",
    },
    {
      category: ATTA,
      weightInKgs: "25",
      id: 1048,
      name: "Premium R Atta 25kg",
      description: "",
      image: require("../assets/Premium-R-Atta-25kg.png"),
      cost: 900,
      ratings: "4",
    },
    {
      category: ATTA,
      weightInKgs: "50",
      id: 1049,
      name: "Premium R Atta 50kg",
      description: "",
      image: require("../assets/Premium-R-Atta-50kg.png"),
      cost: 1800,
      ratings: "4",
    },
    {
      category: SUJI,
      weightInKgs: "25",
      id: 1050,
      name: "Premium Suji 25kg",
      description: "",
      image: require("../assets/Premium-Suji-25kg.png"),
      cost: 1080,
      ratings: "4",
    },
    {
      category: SUJI,
      weightInKgs: "50",
      id: 1051,
      name: "Premium Suji 50kg",
      description: "",
      image: require("../assets/Premium-Suji-50kg.png"),
      cost: 2070,
      ratings: "4",
    },
    {
      category: MAIDA,
      weightInKgs: "25",
      id: 1052,
      name: "Special Maida 25kg",
      description: "",
      image: require("../assets/Special-Maida-25kg.png"),
      cost: 450,
      ratings: "4",
    },
    {
      category: MAIDA,
      weightInKgs: "50",
      id: 1053,
      name: "Special Maida 50kg",
      description: "",
      image: require("../assets/Special-Maida-50kg.png"),
      cost: 1035,
      ratings: "4",
    },
  ]);

  const fils = [
    {
      categoryName: "category",
      categoryLabel: "Category",
      children: [
        {
          typeName: "Maida",
          typeLabel: "Maida",
        },
        {
          typeName: "Chiroti",
          typeLabel: "Chiroti",
        },
        {
          typeName: "Atta",
          typeLabel: "Atta",
        },
        {
          typeName: "Suji",
          typeLabel: "Suji",
        },
      ],
    },
    {
      categoryName: "weightInKgs",
      categoryLabel: "Weight",
      children: [
        {
          typeName: "0-25",
          typeLabel: "Up to 25 Kgs",
        },
        {
          typeName: "26-50",
          typeLabel: "26 to 50 Kgs",
        },
        {
          typeName: "51-100",
          typeLabel: "More than 50 Kgs",
        },
      ],
    },
  ];

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: 20,
      display: "flex",
      flexDirection: "row",
    },
    filter: {
      flex: 1,
    },
    products: {
      flex: 2,
    },
    rightSide: {
      flex: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: "auto",
      maxWidth: 800,
    },
    image: {
      width: 130,
      height: 130,
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%",
    },
    cartButton: {
      width: 150,
      padding: 10,
      color: "white",
    },
  }));

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

  const [appliedFilter, setAppliedFilter] = useState({});
  const [displayProducts, setdisplayProducts] = useState(products);

  const applyFilter = (filterObj, event) => {
    let newAppliedFilter = appliedFilter;
    if (event.target.checked) {
      if (newAppliedFilter[filterObj.categoryName]) {
        newAppliedFilter[filterObj.categoryName].push(event.target.name);
      } else {
        newAppliedFilter[filterObj.categoryName] = [event.target.name];
      }
    } else {
      newAppliedFilter[filterObj.categoryName] = newAppliedFilter[
        filterObj.categoryName
      ].filter((item) => item !== event.target.name);
    }
    setAppliedFilter(newAppliedFilter);
    filterProducts();
  };

  const filterProducts = () => {
    let filteredProducts = products;
    let noFilterPresent = true;
    for (let item of Object.keys(appliedFilter)) {
      if (appliedFilter[item].length) {
        noFilterPresent = false;
        if (item === "weightInKgs") {
          console.log(appliedFilter[item]);
          let filteredByWeight = [];
          for (let weightLimits of appliedFilter[item]) {
            let weights = weightLimits.split("-");
            filteredByWeight = filteredByWeight.concat(
              filteredProducts.filter(
                (product) =>
                  product.weightInKgs >= weights[0] &&
                  product.weightInKgs <= weights[1]
              )
            );
          }
          filteredProducts = filteredByWeight;
        } else {
          let filteredByCategory = [];
          for (let category of appliedFilter[item]) {
            filteredByCategory = filteredByCategory.concat(
              filteredProducts.filter(
                (product) => product.category === category
              )
            );
          }
          filteredProducts = filteredByCategory;
        }
      }
    }
    if (noFilterPresent) {
      filteredProducts = products;
    }
    setdisplayProducts(filteredProducts);
  };

  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Filters
          className={classes.filter}
          changeFilter={applyFilter}
          filters={fils}
        >
          Quack
        </Filters>
        <div className={classes.products}>
          {displayProducts.map((product, idx) => (
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
        <div className={classes.rightSide}></div>
      </div>
    </>
  );
}
