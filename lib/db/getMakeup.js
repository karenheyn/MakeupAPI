const axios = require("axios");
const fs = require("fs");

axios
  .get("http://makeup-api.herokuapp.com/api/v1/products.json")
  .then(response => {
    console.log(response.data);
    fs.writeFile("./lib/data/makeup.json", response.data, err => {
      console.log(err);
    });
  });
