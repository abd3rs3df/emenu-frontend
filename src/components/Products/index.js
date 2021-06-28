import {
  ProductsContainer,
  ProductWrapper,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton,
} from "./ProductsElements";
import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import Classes from "../../App.module.css";
import Count from "../Counter.js";
import Carousel from "react-responsive-carousel";
import Counter from "../Counter.js";
import MyContext from "../../my-context";
const Products = () => {
  const myContext = useContext(MyContext);
  const [food, setPosts] = useState([]);
  const [IdType, setIdType] = useState([]);
  const [selectType, setSelectType] = useState(5);
  const count = new Counter();

  const [count1, setCount] = useState(count.state.count);

  useEffect(() => {
    const isRendered = true;

    axios
      .get(`${process.env.REACT_APP_URL}/get_food`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },

        mode: "no-cors",
      })
      .then((res) => {
        if (isRendered) {
          setPosts(res.data);
        }
        return null;
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      isRendered = false;
    };
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/get_idType`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        mode: "no-cors",
      })
      .then((res) => {
        console.log(res);
        setIdType(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <ul className={Classes.ul}>
        {IdType.map((food) => (
          <li className={Classes.li} key={food.id}>
            <div className={Classes.buttons}>
              <button
                className={Classes.button}
                onClick={() => setSelectType(food.id)}
              >
                {food.name}
              </button>
            </div>
          </li>
        ))}
      </ul>

      <ProductsContainer>
        <ProductWrapper>
          {food.map((food) => {
            if (food.id_type_of_food == selectType)
              return (
                <ProductCard key={food.id_food}>
                  <ProductImg
                    src={`${process.env.REACT_APP_URL}/${food.path_image}`}
                    alt={food.path_image}
                  />
                  <ProductInfo>
                    <ProductTitle>{food.name_food}</ProductTitle>
                    <ProductDesc>{food.description}</ProductDesc>
                    <ProductPrice>{food.price}</ProductPrice>
                  </ProductInfo>
                  <Count />
                </ProductCard>
              );
          })}
        </ProductWrapper>

        <ProductButton>add</ProductButton>
      </ProductsContainer>
    </>
  );
};

export default Products;
