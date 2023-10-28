const express = require("express");
const app = express();
const port = 1000;
const db = require("./config/mongoose");

//passport for authentication and authorization
const passport = require("passport");
const passportJWT = require("./config/jwt-strategy");

app.use(passport.initialize());

app.use(express.urlencoded());

app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log("Error in setting the server");
  }
  console.log("Server running in port", port);
});
