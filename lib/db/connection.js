const mongoose = require("mongoose");
mongoose.Promise = Promise;
// mongoose.connect("mongodb://localhost/makeup", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

let mongoURI = "";
if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = "mongodb://localhost/makeup";
}

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(instance =>
    console.log(`Connected to db: ${instance.connections[0].name}`)
  )
  .catch(error => console.log("Connection failed!", error));

module.exports = mongoose;
