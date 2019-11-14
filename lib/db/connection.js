const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/makeup", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

let mongoURI = "";
if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = "mongodb://localhost/makeup";
}

module.exports = mongoose;
