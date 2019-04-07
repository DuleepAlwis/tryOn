const express = require("express");
const bodyParser = require("body-parser");
const Clothes = require("../models/clothes");
const Tights = require("../models/tights");
const Gloves = require("../models/gloves");
const Belts = require("../models/belts");
const Caps = require("../models/caps");
const HandBags = require("../models/handbags");

const router = express.Router();

router.post("/AddClothes", (req, res, next) => {
  const postData = req.body;
  const clothes = new Clothes({
    name: postData.name,
    category: postData.category,
    large: {
      price: postData.MeasurementLP,
      quantity: postData.MeasurementLQ,
      chest: [parseFloat(postData.MeasurementLC1), parseFloat(postData.MeasurementLC2)],
      weist: [parseFloat(postData.MeasurementLW1), parseFloat(postData.MeasurementLW2)],
      hips: [parseFloat(postData.MeasurementLH1), parseFloat(postData.MeasurementLH2)]
    },
    medium: {
      price: postData.MeasurementMP,
      quantity: postData.MeasurementMQ,
      chest: [postData.MeasurementMC1, postData.MeasurementMC2],
      weist: [postData.MeasurementMW1, postData.MeasurementMW2],
      hips: [postData.MeasurementMH1, postData.MeasurementMH2]
    },
    small: {
      price: postData.MeasurementSP,
      quantity: postData.MeasurementSQ,
      chest: [postData.MeasurementSC1, postData.MeasurementSC2],
      weist: [postData.MeasurementSW1, postData.MeasurementSW2],
      hips: [postData.MeasurementSH1, postData.MeasurementSH2]
    },
    color: postData.colors
  });
  console.log(clothes);
  clothes.save()
    .then(result => {
      console.log("OK");
      res.status(200).json({
        message: 1,
        result: result
      })
    })
    .catch(err => {
      console.log(err.message);
      res.status(200).json({
        message: 0,
        result: err

      })
    });
});


router.post("/AddTights", (req, res, next) => {
  const postData = req.body;
  const tights = new Tights({
    name: postData.name,
    category: postData.category,
    large: {
      price: postData.MeasurementLP,
      quantity: postData.MeasurementLQ,
      chest: [parseFloat(postData.MeasurementLC1), parseFloat(postData.MeasurementLC2)],
      weist: [parseFloat(postData.MeasurementLW1), parseFloat(postData.MeasurementLW2)],
      hips: [parseFloat(postData.MeasurementLH1), parseFloat(postData.MeasurementLH2)]
    },
    medium: {
      price: postData.MeasurementMP,
      quantity: postData.MeasurementMQ,
      chest: [postData.MeasurementMC1, postData.MeasurementMC2],
      weist: [postData.MeasurementMW1, postData.MeasurementMW2],
      hips: [postData.MeasurementMH1, postData.MeasurementMH2]
    },
    small: {
      price: postData.MeasurementSP,
      quantity: postData.MeasurementSQ,
      chest: [postData.MeasurementSC1, postData.MeasurementSC2],
      weist: [postData.MeasurementSW1, postData.MeasurementSW2],
      hips: [postData.MeasurementSH1, postData.MeasurementSH2]
    },
    color: postData.colors
  });
  console.log(tights);
  tights.save()
    .then(result => {
      console.log("OK");
      res.status(200).json({
        message: 1,
        result: result
      })
    })
    .catch(err => {
      console.log(err.message);
      res.status(200).json({
        message: 0,
        result: err

      })
    });
});

router.post("/AddGloves", (req, res, next) => {
  const postData = req.body;
  const gloves = new Gloves({
    name: postData.name,
    price: postData.price,
    quantity: postData.quantity,
    width: postData.width,
    length: postData.length
  });
  console.log(gloves);

  gloves.save()
    .then((result) => {
      res.status(200).json({
        message: 1,
        result: result
      })
    })
    .catch((err) => {
      res.status(200).json({
        message: 0,
        result: result
      });
    });
});

router.post("/AddBelts", (req, res, next) => {
  const postData = req.body;
  const belts = new Belts({
    name: postData.name,
    price: postData.price,
    quantity: postData.quantity,
    length: postData.length
  });
  console.log(belts);
  belts.save()
    .then((result) => {
      res.status(200).json({
        message: 1,
        result: result
      })
    })
    .catch((err) => {
      res.status(200).json({
        message: 0,
        result: result
      });
    });
});

router.post("/AddCaps", (req, res, next) => {
  const postData = req.body;
  const caps = new Caps({
    name: postData.name,
    price: postData.price,
    quantity: postData.quantity,
    width: postData.width
  });
  console.log(caps);
  caps.save()
    .then((result) => {
      res.status(200).json({
        message: 1,
        result: result
      })
    })
    .catch((err) => {
      res.status(200).json({
        message: 0,
        result: result
      });
    });
});

router.post("/AddHandBags", (req, res, next) => {
  const postData = req.body;
  const handbags = new HandBags({
    name: postData.name,
    price: postData.price,
    quantity: postData.quantity
  });
  handbags.save()
    .then((result) => {
      res.status(200).json({
        message: 1,
        result: result
      })
    })
    .catch((err) => {
      res.status(200).json({
        message: 0,
        result: result
      });
    });
});
module.exports = router;
