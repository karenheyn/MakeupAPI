const makeupData = require("../data/products.json");
const makeupSchema = require("../models/makeup");

const Mdata = makeupData.map(item => {
  const product = {};
  product._id = item._id;
  product.brand = item.brand;
  product.price = item.price;
  product.priceSign = item.price_sign;
  product.currency = item.currency;
  product.imageLink = item.image_link;
  product.productLink = item.product_link;
  product.websiteLink = product.website_link;
  product.description = item.description;
  product.rating = item.rating;
  product.category = item.category;
  product.productType = item.product_type;
  product.tagList = item.tag_list;
  product.productColors = item.product_colors.map(i => {
    const color = {};
    color.hexValue = i.hex_value;
    color.colourName = i.colour_name;
    console.log(color);
    return color;
  });
  return product;
});
// console.log(Mdata);

makeupSchema
  .deleteMany({})
  .then(() => {
    makeupSchema
      .create(Mdata)
      .then(makeup => {
        console.log(makeup);
      })
      .then(process.exit)
      .catch(err => {
        console.log(err);
      });
  })
  .catch(err => console.log(err));
