const Makeup = require("../models/makeup");

const makeupController = {
  index: (req, res) => {
    Makeup.find({}).then(product => {
      res.json(product);
    });
  },
  findbrand: (req, res) => {
    Makeup.find({ brand: req.params.brand }).then(companies => {
      res.json(companies);
    });
  },
  findtype: (req, res) => {
    Makeup.find({ productType: req.params.type }).then(item => {
      res.json(item);
    });
  }
};

module.exports = makeupController;
