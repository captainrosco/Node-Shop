import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import HttpService from "../services/service";
import Product from "./components/product/product";
import Wishilist from "./components/wishlist/wishlist";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
    this.loadData = this.loadData.bind(this);
    this.productList = this.product.bind(this);
    this.loadData();
  }

  loadData = () => {
    let self = this;
    http.getProducts().then(
      data => {
        this.setState({ products: data });
      },
      err => {}
    );
  };

  productList = () => {
    const list = this.state.products.map(product => {
      <div className="col-sm-4" key={product._id}>
        <Product
          title={product.title}
          price={product.price}
          imgURL={product.imgURL}
        />
      </div>;
    });
    return list;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container-fluid App-main">
          <div className="row">
            <div className="row">
              <div className="col-sm-8">{this.productList()}</div>
            </div>
            <div className="col-sm-4">
              <Wishilist />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
