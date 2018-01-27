import React, { Component } from "react";
import "./product_condensed.css";

export default class Product_Condensed extends Component {
  render() {
    return (
      <li className="list-group-item pc-condensed">
        <a className="bnt btn-outline-danger">X</a>
         <p> {this.props.product.title} | ${this.props.product.price} </p>
        
      </li>
    );
  }
}
