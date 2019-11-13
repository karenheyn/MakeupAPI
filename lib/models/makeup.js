const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const makeupSchema = new Schema({
  _id: Number,
  brand: String,
  name: String,
  price: String,
  priceSign: String,
  currency: String,
  imageLink: String,
  productLink: String,
  websiteLink: String,
  description: String,
  rating: Number,
  category: String,
  productType: String,
  tagList: [String],
  productColors: [
    {
      hexValue: String,
      colourName: String
    }
  ]
});

module.exports = mongoose.model("Makeup", makeupSchema);
