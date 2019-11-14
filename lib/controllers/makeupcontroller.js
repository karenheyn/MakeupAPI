const Makeup = require("../models/makeup");

const makeupController = {
  index: (req, res) => {
    Makeup.find({}).then(product => {
      res.json(product);
    });
  },
  brand: (req, res) => {
    Makeup.find({ brand: req.params.brand }).then(companies => {
      res.json(companies);
    });
  }
};

module.exports = makeupController;
