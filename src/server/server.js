const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const db = mongoose.connect("mongodb://localhost/ShopBasic");

//Models
const Product = require("./model/product");
const WishList = require("./model/wishlist");

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Routes

//Post Product
app.post("/product", (req, res) => {
  let product = new Product();
  product.title = req.body.title;
  product.price = req.body.price;
  product.save((err, savedProduct) => {
    if (err) {
      res.status(500).send({ error: "Could not save product" });
    } else {
      res.send(savedProduct);
    }
  });
});

app.get("/product", (req, res) => {
  Product.find({}, (err, products) => {
    if (err) {
      res.status(500).send({ error: "Could not find products" });
    } else {
      res.send(products);
    }
  });
});

app.post("/wishlist", (req, res) => {
  let wishList = new WishList();
  wishList.title = req.body.title;

  wishList.save((err, newWishList) => {
    if (err) {
      res.status(500).send({ error: "Could not create wishlist" });
    } else {
      res.send(newWishList);
    }
  });
});

app.put("/wishlist/product/add", (req, res) => {
  Product.findOne({ _id: req.body.productId }, (err, product) => {
    if (err) {
      res.status(500).send({ error: "Could not find item" });
    } else {
      WishList.update(
        { _id: req.body.wishListId }, {$addToSet: { products: product._id }},
        (err, wishList) => {
          if (err) {
            res.status(500).send({ error: "could not add item to wishlist" });
          } else {
            res.send("Successfully added to wishlist.");
          }
        }
      );
    }
  });
});

app.get("/wishlist", (req, res) => {
  WishList.find({}).populate({path: 'products', model: 'Product'}).exec((err,wishlists) =>{
    if(err) {
      res.status(500).send({error:'Could not fetch wishlist'});
    } else {
      res.send(wishlists);
    }
  })
});

//Server
app.listen(3004, () => {
  console.log("Server is running");
});
