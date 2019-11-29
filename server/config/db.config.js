require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(`${process.env.DB_LOCAL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(_ => {
    console.log(
      `Connected to Mongo! Database name: "${_.connections[0].name}"`
    );
  })
  .catch(err => {
    console.log("Error connecting to Mongo!", err);
  });
