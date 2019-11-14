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
  findType: (req, res) => {
    Makeup.find({ productType: req.params.type }).then(item => {
      res.json(item);
    });
  },
  newProduct: (req, res) => {
    Makeup.create(req.body).then(product => {
      res.json(product);
    });
  },
  updateProduct: (req, res) => {
    Makeup.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      useFindandModify: false
    }).then(updateInfo => {
      res.json(updateInfo);
    });
  },
  deleteProduct: (req, res) => {
    Makeup.findOneAndDelete({ _id: req.params.id }).then(product => {
      res.json(product);
    });
  }
};

module.exports = makeupController;
