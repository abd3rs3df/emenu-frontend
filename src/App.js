import { BrowserRouter as Roter, Route } from "react-router-dom";

import Order from "../src/components/order/order";
import Home from "../src/components/home/home";

import { useState } from "react";
import MyContext from "./my-context";

function App() {
  // const { state, setState } = useState({});
  return (
    <MyContext.Provider value={{ order: {} }}>
      <Roter>
        <Route path="/" component={Home} exact />
        <Route path="/index" component={Order} />
      </Roter>
    </MyContext.Provider>
  );
}
export default App;
