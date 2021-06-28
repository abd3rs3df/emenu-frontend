import React from "react";

import Classes from "../../src/App.module.css";
import { totalOrderPrice } from "../util/total-order-price";
const allPrice = (props) => {
  return (
    <section className={Classes.allprice}>
      <div>
        <p>مبلغ الكلي :{totalOrderPrice(props.posts)}</p>
      </div>
    </section>
  );
};

export default allPrice;
