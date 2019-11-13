const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const ColorSchema = new Schema({
  hexValue: String,
  colourName: String
});

const MakeupSchema = new Schema({
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
  productColors: [ColorSchema]
});

module.exports = mongoose.model("Makeup", MakeupSchema);
module.exports = mongoose.model("Colors", ColorSchema);
