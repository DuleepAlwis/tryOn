const express = require("express");
const crypto = require('crypto');
//const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const userCustomer = require("../models/customerUser");
var nodemailer = require('nodemailer');

//const userEmployee = require("");

const router = express.Router();

//console.log("JKH");
router.post("/signup", (req, res, next) => {
  //bcrypt.hash(req.body.password, 10)
  let send = 0;
  hash = crypto.createHash('md5').update(req.body.password).digest('hex');
  const customer = new userCustomer({
    email: req.body.email,
    password: hash,
    role: "C",
    info: {
      name: req.body.name,
      address: req.body.address,
      city: req.body.city,
      district: req.body.district,
      mobileno: req.body.mobileno
    }
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
  //console.log(req.body);
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
      // console.log(crypto.createHash('md5').update(req.body.password).digest('hex') == loggedUser.password);
      return crypto.createHash('md5').update(req.body.password).digest('hex') == loggedUser.password;

      //return bcrypt.compare(req.body.password, user.password)
    })
    .then(result => {
      if (send == 0 && !result) {
        return res.status(200).json({
          userId: "",
          role: "",
          token: ""
        });
      }
      const token = jwt.sign({
        email: loggedUser.email,
        userId: loggedUser._id
      }, "sercet string this", {
        expiresIn: "1h"
      });
      // console.log(token);
      res.status(200).json({
        userId: loggedUser._id,
        role: "C",
        token: token
      });
    })
    .catch(err => {
      if (send == 0) {
        return res.status(200).json({
          userId: "",
          role: "",
          token: ""
        });
      }
    });

});

router.post("/forgotPassword", (req, res, next) => {
  const email = req.body.email;
  let tempPassword = crypto.createHash('md5').update(email).digest('hex') + Date.now();;
  hash = crypto.createHash('md5').update(tempPassword).digest('hex');
  const customer = {
    email: email,
    password: hash
  };
  userCustomer.updateOne({
      email: email
    }, customer)
    .then((result) => {
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'duleepalwis0@gmail.com',
          pass: 'duleep3alwis'
        }
      });

      let mailOptions = {
        from: '<anonymous></anonymous>',
        to: email,
        subject: 'Tempory password',
        text: tempPassword
      };

      try {
        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
            res.status(200).json({
              message: 0
            });
          } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json({
              message: 1
            });
          }
        });
      } catch (error) {
        console.log(error);
        res.status(200).json({
          message: 0
        });
      }

    })
    .catch((result) => {
      res.status(200).json({
        message: 0
      })
    })


})

module.exports = router;
