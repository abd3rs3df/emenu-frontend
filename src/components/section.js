import React from "react";

import Classes from "../../src/App.module.css";
const Section = ({ posts }) => {
  return (
    <section>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <div className={Classes.card}>
              <div className={Classes.foodPrice}>
                <h1>{post.name_food}</h1>
                <h1> السعر :{post.price}</h1>
              </div>
              <div className={Classes.count}>
                <p> العدد :{post.quantity}</p>
                <p> المجموع الكلي : {post.quantity *post.price}</p>
              </div>
            </div>{" "}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Section;
