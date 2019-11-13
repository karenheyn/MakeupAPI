const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/makeup", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoose;
