const express = require("express");
const crypto = require('crypto');
//const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const userCustomer = require("../models/customerUser");

//const userEmployee = require("");

const router = express.Router();

//console.log("JKH");
router.post("/register", (req, res, next) => {
  //bcrypt.hash(req.body.password, 10)
  let send = 0;
  hash = crypto.createHash('md5').update(req.body.password).digest('hex');
  const customer = new userCustomer({
    email: req.body.email,
    password: hash,
    firstName: req.body.firstName, 
    lastName: req.body.lastName,
    gender:req.body.gender,
    role: "C",
    // info: {
      
    // }
  });
  console.log(customer);
  customer.save()
    .then(result => {
      //console.log(result);
      res.status(200).json({
        message: 1,
        result: result
      });
      
    })
    .catch(err => {
      console.log(err.message);
      res.status(200).json({
        message: 0,
        error: err
      });
    });
});

router.post("/login", (req, res, next) => {
  let loggedUser;
  let send = 0;
  //console.log(req);
  //req = JSON.parse(req);
  console.log(req.body);
  userCustomer.findOne({
      email: req.body.email
    }).then(user => {
      if (!user) {
        send = 1;
        return res.status(200).json({
          message: 0
        });
      }
      loggedUser = user;
      return crypto.createHash('md5').update(req.body.password).digest('hex') == loggedUser.password;

      //return bcrypt.compare(req.body.password, user.password)
    })
    .then(result => {
      if (send == 0 && !result) {
        return res.status(200).json({
          message: 0
        });
      }
      const token = jwt.sign({
        email: loggedUser.email,
        userId: loggedUser._id
      }, "sercet string this", {
        expiresIn: "1h"
      });
      console.log(token);
      res.status(200).json({
        token: token
      });
    })
    .catch(err => {
      if (send == 0) {
        return res.status(200).json({
          message: 0
        });
      }
    });

});

module.exports = router;
