import { classes } from "istanbul-lib-coverage";
import React, { Component } from "react";
import Classes from "../App.module.css";
import './Products/index'

class Counter extends Component {
  state = {
    count: 1,
  };

  increment = () => {
    const count = this.state.count + 1;
    
    this.setState({ count });
    
  };
  decrement = () => {
    if (this.state.count> 0)
    this.setState({
      
      count: this.state.count - 1,
      
     
    });
    else {
      return
    }
  };

  render() {
    return (
      <div >
        <div className = {Classes.counter}>
          
          <button className={Classes.decre} onClick={this.decrement}>
            -
          </button>
          <h1 className = {classes}>{this.state.count} </h1>
          <button className={Classes.incre} onClick={this.increment} >
            +
          </button>
          
        </div>
      </div>
    );
  }
}
export default Counter;
