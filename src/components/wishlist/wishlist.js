import React, { Component } from "react";
import "./product.css";
import Product from "./product_condensed/product_condensed";

export default class Wishlist extends Component {
  constructor(props) {
    super(props);
    this.state = {wishList: [
      {title: "bologna Killer",
      price: 23.99,
      _id: "akasdasd"},
      {title: "bologna Killer",
      price: 23.99,
      _id: "akasdasd"},
      {title: "bologna Killer",
      price: 23.99,
      _id: "akasdasd"}
    ]}
    this.createWishList = this.createWishList.bind(this);
  }

  createWishList = () => {
    const list = this.state.wishList.map(product => {
      <Product product={product} key={product._id} />;
    });
    return list;
  };

  render() {
    return (
      <div className="card">
        <div className="card-block">
          <h4 className="card-title">Wish List</h4>
          <ul className="list-group">
          {this.createWishList()}
          </ul>
        </div>
      </div>
    );
  }
}
