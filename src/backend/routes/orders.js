const express = require("express");
const crypto = require('crypto');
//const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const order = require("../models/order");
const router = express.Router();

router.post("/addOrder", (req, res, next) => {
  let delivery = req.body.delivery;
  let items = req.body.items;
  console.log(req.body);
  const orderNew = new order({
    data: req.body.date,
    time: req.body.time,
    items: items,
    deliveryAddress: delivery,
    totalPrice: req.body.totalPrice,
    comment: "",
    status: "NC"
  });
  console.log(orderNew);
  orderNew.save()
    .then((result) => {
      res.status(200).json({
        message: 1
      });
    })
    .catch((result) => {
      console.log(result);
      res.status(200).json({
        message: 0
      });
    })
});

module.exports = router;