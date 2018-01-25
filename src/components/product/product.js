import React, { Component } from "react";
import "./product.css";

export default class Product extends Component {
  render() {
    return (
      <div className="card">
        <img className="card-img-top" src={this.props.imgURL} alt="product" />
        <div className="card-block">
          <h4 className="card-title">{this.props.title}</h4>
          <p className="card-text">{this.props.price}</p>
          <a href="#" className="btn btn-primary">Add to Wishlist</a>
        </div>
      </div>
    );
  }
}
