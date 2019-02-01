const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");
const Movies = require("../models/Movies");
const celebrityData = require("./celebrity-data");

mongoose
  .connect("mongodb://localhost/iron-mongoose-movies", {
    useNewUrlParser: true
  })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

Celebrity.deleteMany()
  .then(() => Celebrity.deleteMany())
  .then(() => Celebrity.create(celebrityData)) // This then is executed when Student.deleteMany is done

  .then(() => {
    console.log("Done");
    mongoose.disconnect(); // Close the connection to the db
  })
  .catch(err => {
    console.log("Error:", err);
  });
