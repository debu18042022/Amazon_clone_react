import React, { useContext } from "react";
import "./HomeStyle.css";
import "./Data.json";
import { Contextdata } from "./MyContext";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
const data = require("./Data.json");
function Home() {
  let product = data.products;
  console.log(product);

  const [cart, set_cart, Amount, set_total_amount] = useContext(Contextdata);

  const add_Product = (event) => {
    let index_id = parseInt(event.target.id);
    let exist_index;
    let flag = 1;
    let amount = 0;
    cart.map((item, index) => {
      if (item.id === index_id) {
        flag = 0;
        alert("already exist");
        exist_index = index;
      }
    });

    if (flag === 1) {
      set_cart((cart) => [...cart, product[index_id - 1]]);
      cart.map((item) => {
        amount += item.quantity * item.price;
      });
    }
    if (flag === 0) {
      cart[exist_index].quantity += 1;
      cart.map((item) => {
        amount += item.quantity * item.price;
      });
    }
    console.log(cart);
    console.log(Amount);
  };

  return (
    <div>
      <div>
        <div className="crausal_image">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/soumya/OHL/HnK/AugustART/Teaser/Hero1/Hero2/Unrec/HK_3000x1200-PC._CB630945927_.jpg"
            alt=""
          />
        </div>

        <div className="flex_container">
          {product.map((prod) => (
            <div className="flex_item">
              <h2>{prod.offers}</h2>
              <img src={prod.photograph} alt=""></img>
              <h5>${prod.price}</h5>
              <h4>{prod.name}</h4>
              <button onClick={add_Product} id={prod.id}>
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
