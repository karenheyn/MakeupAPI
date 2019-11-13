const makeupData = require("../data/products.json");
const makeupSchema = require("../models/makeup");

makeupSchema.deleteMany({}).then(() => {
  makeupSchema
    .create(makeupData)
    .then(makeup => {
      console.log(makeup);
    })
    .catch(err => {
      console.log(err);
    });
});
