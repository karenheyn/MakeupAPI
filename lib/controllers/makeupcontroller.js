const Makeup = require("../models/makeup");

const makeupController = {
  index: (req, res) => {
    Makeup.find({}).then(product => {
      res.json(product);
    });
  }
};

module.exports = makeupController;
