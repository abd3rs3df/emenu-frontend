import Nav from '../nav'
import Section from '../section'
import axios from "axios";
import React, { useState, useEffect } from "react";
import AllPrice from '../allPrice'
function Order() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/get_order/1`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        mode: "no-cors",
      })
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
 
  return (
    <>
    <Nav/>
    <Section posts={posts}/>
    <AllPrice posts={posts}/>
    </>
  );
}

export default Order;
