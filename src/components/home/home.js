import { BrowserRouter as Roter } from "react-router-dom";
import { GlobalStyles } from "../../globalStyles";
import Hero from "../hero";
import { productData, productDataTwo } from '../Products/data';
import Products from '../Products/index';
import Footer from '../Footer'
import axios from "axios";
import React, { useState, useEffect } from "react";
function Home() {


  return (
    <Roter>
      <GlobalStyles />
      <Hero />
      <Products heading='the most wanted'  />
       <Footer/>
    </Roter>

  );
}
export default Home;
