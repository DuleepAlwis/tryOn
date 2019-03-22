const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const cors = require('cors');
const userRoute = require("./routes/user");

const app = express();

mongoose
  .connect('mongodb://localhost:27017/tryondb', {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("connected to the database");
  })
  .catch(() => {
    console.log("connection failed");
  })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
//var jsonParser = bodyParser.json();
//var urlencodedParser = bodyParser.urlencoded({ extended: false });

//app.use(cors);
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type,Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PATCH,DELETE,OPTIONS"
  );
  next();
});




app.post("/api/user/login1", (req, res, next) => {
  console.log(req.body.email);
})



app.use("/api/user", userRoute);
app.use("/api/customer", userRoute);
console.log("aaa");
module.exports = app;
