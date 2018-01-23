const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const wishList = new Schema ({
  title: {
    type: String,
    default: 'WishList'
  },
  //Refrences Product Schema from db
  products: [{type: ObjectId, ref: 'Product'}]
})