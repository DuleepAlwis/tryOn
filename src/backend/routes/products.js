const express = require("express");
const multer = require("multer");
const bodyParser = require("body-parser");
const Clothes = require("../models/clothes");
const Tights = require("../models/tights");
const Gloves = require("../models/gloves");
const Belts = require("../models/belts");
const Caps = require("../models/caps");
const HandBags = require("../models/handbags");
const checkAuth = require("../middleware/check-auth-receptionist");
const router = express.Router();
const MIME_TYPE_MAP = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg'
};
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = new Error("Invalid mime type");
    if (isValid) {
      error = null;
    }

    cb(error, "backend/images");
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(' ').join('-');
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, name + '-' + Date.now() + '.' + ext);

  }
});

router.post("/clothImageSave", multer({
  storage: storage
}).single("image"), (req, res, next) => {
  const url = req.protocol + '://' + req.get("host");
  const id = req.body.id;
  let data = {};
  //console.log(req);
  //console.log(req.file.originalname);
  try {
    switch (req.body.type) {
      case "Front":
        //console.log(req.file.filename);
        data = {
          imgFront: url + "/images/" + req.file.filename
        };
        // console.log(data.imgFront);
        break;
      case "Back":
        data = {
          imgBack: url + "/images/" + req.file.filename
        };
        break;
      case "Left":
        data = {
          imgLeft: url + "/images/" + req.file.filename
        };
        break;
      case "Right":
        data = {
          imgRight: url + "/images/" + req.file.filename
        };
        break;
      default:
        // console.log("123");
    }

    Clothes.updateOne({
        _id: id
      }, data).then(result => {
        //console.log("AAA\n" + result);
        res.status(200).json({
          message: 1,
          error: ""
        })
      })
      .catch(result => {
        res.status(200).json({
          message: 0,
          error: ""
        })
      });
  } catch (error) {
    console.log(error);
    res.status(200).json({
      message: 0,
      error: error
    })
  }
});

router.post("/getClothImages", (req, res, next) => {
  //const clothes = new Clothes();
  //console.log("AAA");
  //console.log(req.body.id);
  //const postData = req.body;
  let message = 0;
  Clothes.findById({
    _id: req.body.id
  }, (err, clothItem) => {
    // console.log(clothItem);
    if (clothItem) {
      message = 1;
    }
    /* console.log(clothItem);
     console.log(clothItem.imgFront + "=" + clothItem.imgBack + "=" + clothItem.imgLeft + "=" + clothItem.imgRight);*/

    res.status(200).json({
      message: message,
      result: {
        imgFront: clothItem.imgFront,
        imgBack: clothItem.imgBack,
        imgLeft: clothItem.imgLeft,
        imgRight: clothItem.imgRight
      }
    });
  });
});

/*-------------------------------------------------------------Tight Images--------------------------*/
router.post("/tightImageSave", multer({
  storage: storage
}).single("image"), (req, res, next) => {
  const url = req.protocol + '://' + req.get("host");
  const id = req.body.id;
  let data = {};
  //console.log(req);
  //console.log(req.file.originalname);
  try {
    switch (req.body.type) {
      case "Front":
        //console.log(req.file.filename);
        data = {
          imgFront: url + "/images/" + req.file.filename
        };
        // console.log(data.imgFront);
        break;
      case "Back":
        data = {
          imgBack: url + "/images/" + req.file.filename
        };
        break;
      case "Left":
        data = {
          imgLeft: url + "/images/" + req.file.filename
        };
        break;
      case "Right":
        data = {
          imgRight: url + "/images/" + req.file.filename
        };
        break;
      default:
        // console.log("123");
    }

    Tights.updateOne({
        _id: id
      }, data).then(result => {
        //console.log("AAA\n" + result);
        res.status(200).json({
          message: 1,
          error: ""
        })
      })
      .catch(result => {
        res.status(200).json({
          message: 0,
          error: ""
        })
      });
  } catch (error) {
    console.log(error);
    res.status(200).json({
      message: 0,
      error: error
    })
  }
});

router.post("/getTightsImages", (req, res, next) => {
  //const clothes = new Clothes();
  //console.log("AAA");
  //console.log(req.body.id);
  //const postData = req.body;
  let message = 0;
  Tights.findById({
    _id: req.body.id
  }, (err, clothItem) => {
    // console.log(clothItem);
    if (clothItem) {
      message = 1;
    }
    /* console.log(clothItem);
     console.log(clothItem.imgFront + "=" + clothItem.imgBack + "=" + clothItem.imgLeft + "=" + clothItem.imgRight);*/

    res.status(200).json({
      message: message,
      result: {
        imgFront: clothItem.imgFront,
        imgBack: clothItem.imgBack,
        imgLeft: clothItem.imgLeft,
        imgRight: clothItem.imgRight
      }
    });
  });
});
/*------------------------------Accessories CRUD--------------------------------------*/




router.post("/accessoriesImageSave", multer({
  storage: storage
}).single("image"), (req, res, next) => {
  const url = req.protocol + '://' + req.get("host");
  const id = req.body.id;
  let data = {};
  //console.log(req);
  //console.log(req.file.originalname);
  try {
    switch (req.body.type) {
      case "Front":
        //console.log(req.file.filename);
        data = {
          imgFront: url + "/images/" + req.file.filename
        };
        // console.log(data.imgFront);
        break;
      case "Back":
        data = {
          imgBack: url + "/images/" + req.file.filename
        };
        break;
      case "Left":
        data = {
          imgLeft: url + "/images/" + req.file.filename
        };
        break;
      case "Right":
        data = {
          imgRight: url + "/images/" + req.file.filename
        };
        break;
      default:
        // console.log("123");
    }
    switch (req.body.category) {
      case "Caps":
        Caps.updateOne({
            _id: id
          }, data).then(result => {
            //console.log("AAA\n" + result);
            res.status(200).json({
              message: 1,
              error: ""
            })
          })
          .catch(result => {
            res.status(200).json({
              message: 0,
              error: ""
            })
          });
        break;
      case "HandBags":
        HandBags.updateOne({
            _id: id
          }, data).then(result => {
            //console.log("AAA\n" + result);
            res.status(200).json({
              message: 1,
              error: ""
            })
          })
          .catch(result => {
            res.status(200).json({
              message: 0,
              error: ""
            })
          });
        break;
      case "Belts":
        Belts.updateOne({
            _id: id
          }, data).then(result => {
            //console.log("AAA\n" + result);
            res.status(200).json({
              message: 1,
              error: ""
            })
          })
          .catch(result => {
            res.status(200).json({
              message: 0,
              error: ""
            })
          });
        break;
      case "Gloves":
        Gloves.updateOne({
            _id: id
          }, data).then(result => {
            //console.log("AAA\n" + result);
            res.status(200).json({
              message: 1,
              error: ""
            })
          })
          .catch(result => {
            res.status(200).json({
              message: 0,
              error: ""
            })
          });
        break;

    }

  } catch (error) {
    console.log(error);
    res.status(200).json({
      message: 0,
      error: error
    });
  };
});

router.post("/getAccessoriesImages", (req, res, next) => {
  //const clothes = new Clothes();
  //console.log("AAA");
  //console.log(req.body.id);
  //const postData = req.body;
  let message = 0;

  try {
    switch (req.body.category) {
      case "Caps":
        Caps.findById({
          _id: req.body.id
        }, (err, clothItem) => {
          // console.log(clothItem);
          if (clothItem) {
            message = 1;
          }
          /* console.log(clothItem);
           console.log(clothItem.imgFront + "=" + clothItem.imgBack + "=" + clothItem.imgLeft + "=" + clothItem.imgRight);*/

          res.status(200).json({
            message: message,
            result: {
              imgFront: clothItem.imgFront,
              imgBack: clothItem.imgBack,
              imgLeft: clothItem.imgLeft,
              imgRight: clothItem.imgRight
            }
          });
        });
        break;

      case "HandBags":
        HandBags.findById({
          _id: req.body.id
        }, (err, clothItem) => {
          // console.log(clothItem);
          if (clothItem) {
            message = 1;
          }
          /* console.log(clothItem);
           console.log(clothItem.imgFront + "=" + clothItem.imgBack + "=" + clothItem.imgLeft + "=" + clothItem.imgRight);*/

          res.status(200).json({
            message: message,
            result: {
              imgFront: clothItem.imgFront,
              imgBack: clothItem.imgBack,
              imgLeft: clothItem.imgLeft,
              imgRight: clothItem.imgRight
            }
          });
        });
        break;
      case "Gloves":
        Gloves.findById({
          _id: req.body.id
        }, (err, clothItem) => {
          // console.log(clothItem);
          if (clothItem) {
            message = 1;
          }
          /* console.log(clothItem);
           console.log(clothItem.imgFront + "=" + clothItem.imgBack + "=" + clothItem.imgLeft + "=" + clothItem.imgRight);*/

          res.status(200).json({
            message: message,
            result: {
              imgFront: clothItem.imgFront,
              imgBack: clothItem.imgBack,
              imgLeft: clothItem.imgLeft,
              imgRight: clothItem.imgRight
            }
          });
        });
        break;
      case "Belts":
        Belts.findById({
          _id: req.body.id
        }, (err, clothItem) => {
          // console.log(clothItem);
          if (clothItem) {
            message = 1;
          }
          /* console.log(clothItem);
           console.log(clothItem.imgFront + "=" + clothItem.imgBack + "=" + clothItem.imgLeft + "=" + clothItem.imgRight);*/

          res.status(200).json({
            message: message,
            result: {
              imgFront: clothItem.imgFront,
              imgBack: clothItem.imgBack,
              imgLeft: clothItem.imgLeft,
              imgRight: clothItem.imgRight
            }
          });
        });
        break;
    }

  } catch (error) {
    console.log(error);
    res.status(200).json({
      message: 0,
      error: error
    })
  }

});

/*-----------------------------------------------------------------------*/
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

router.post("/getAllClothes", (req, res, next) => {
  //const clothes = new Clothes();
  //  console.log("AAA");
  let message = 0;
  Clothes.find({}, (err, clothItems) => {
    console.log(clothItems);
    if (clothItems.length > 0) {
      message = clothItems.length;
    }
    res.status(200).json({
      message: message,
      result: clothItems
    })
  })
})

router.post("/getAllBelts", (req, res, next) => {
  //const clothes = new Clothes();
  console.log("AAA");
  let message = 0;
  Belts.find({}, (err, beltItems) => {
    //console.log(clothItems);
    if (beltItems.length > 0) {
      message = beltItems.length;
    }
    res.status(200).json({
      message: message,
      result: beltItems
    })
  })
})

router.post("/getAllGloves", (req, res, next) => {
  //const clothes = new Clothes();
  console.log("AAA");
  let message = 0;
  Gloves.find({}, (err, productItems) => {
    //console.log(clothItems);
    if (productItems.length > 0) {
      message = productItems.length;
    }
    res.status(200).json({
      message: message,
      result: productItems
    })
  })
})


router.post("/getAllCaps", (req, res, next) => {
  //const clothes = new Clothes();
  console.log("AAA");
  let message = 0;
  Caps.find({}, (err, productItems) => {
    //console.log(clothItems);
    if (productItems.length > 0) {
      message = productItems.length;
    }
    res.status(200).json({
      message: message,
      result: productItems
    })
  })
})

router.post("/getAllHandBags", (req, res, next) => {
  //const clothes = new Clothes();
  console.log("AAA");
  let message = 0;
  HandBags.find({}, (err, productItems) => {
    //console.log(clothItems);
    if (productItems.length > 0) {
      message = productItems.length;
    }
    res.status(200).json({
      message: message,
      result: productItems
    })
  })
})

router.post("/getAllTights", (req, res, next) => {
  //const clothes = new Clothes();
  console.log("AAA");
  let message = 0;
  Tights.find({
    category: req.body.category
  }, (err, tightItems) => {
    //console.log(clothItems);
    if (tightItems.length > 0) {
      message = tightItems.length;
    }
    res.status(200).json({
      message: message,
      result: tightItems
    })
  })
})

router.post("/getTights", (req, res, next) => {
  //const clothes = new Clothes();
  //console.log("AAA");
  //console.log(req.body.id);
  //const postData = req.body;
  let message = 0;
  console.log(req.body.id);
  Tights.find({
    _id: req.body.id
  }, (err, tightItem) => {
    console.log(tightItem);
    if (tightItem) {
      message = 1;
    }

    res.status(200).json({
      message: message,
      result: tightItem
    })
  })
})

router.post("/getCloth", (req, res, next) => {
  //const clothes = new Clothes();
  //console.log("AAA");
  //console.log(req.body.id);
  //const postData = req.body;
  let message = 0;
  Clothes.find({
    _id: req.body.id
  }, (err, clothItem) => {
    console.log(clothItem);
    if (clothItem) {
      message = 1;
    }

    res.status(200).json({
      message: message,
      result: clothItem
    })
  })
})

router.post("/getGloves", (req, res, next) => {

  message = 0;

  Gloves.find({
    _id: req.body.id
  }, (err, clothItem) => {
    console.log(clothItem);
    if (clothItem) {
      message = 1;
    }

    res.status(200).json({
      message: message,
      result: clothItem
    });
  });
});

router.post("/getBelts", (req, res, next) => {

  message = 0;

  Belts.find({
    _id: req.body.id
  }, (err, clothItem) => {
    console.log(clothItem);
    if (clothItem) {
      message = 1;
    }
    console.log(clothItem);
    res.status(200).json({
      message: message,
      result: clothItem
    });
  });
});
router.post("/getCaps", (req, res, next) => {

  message = 0;


  Caps.find({
    _id: req.body.id
  }, (err, clothItem) => {
    console.log(clothItem);
    if (clothItem) {
      message = 1;
    }

    res.status(200).json({
      message: message,
      result: clothItem
    });
  });
});

router.post("/getHandBags", (req, res, next) => {

  message = 0;

  HandBags.find({
    _id: req.body.id
  }, (err, clothItem) => {
    console.log(clothItem);
    if (clothItem) {
      message = 1;
    }

    res.status(200).json({
      message: message,
      result: clothItem
    });
  });
});

router.post("/updateClothes", (req, res, next) => {
  const postObject = req.body;
  const postData = postObject.product;
  const id = postObject.id;
  /*console.log("AAA");
  console.log(postObject);*/
  const clothes = {
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
  };
  console.log("123");
  console.log(clothes);
  Clothes.updateOne({
      _id: id
    }, clothes).then(
      result => {
        console.log("ok");
        res.status(200).json({
          message: 1
        });
      }
    )
    .catch(
      result => {
        console.log(result);

        res.status(200).json({
          message: 0
        });
      }
    );

});

router.post("/updateTights", (req, res, next) => {
  const postObject = req.body;
  const postData = postObject.product;
  const id = postObject.id;
  /*console.log("AAA");
  console.log(postObject);*/
  const tights = {
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
  };
  console.log("123");
  //console.log(clothes);
  Tights.updateOne({
      _id: id
    }, tights).then(
      result => {
        console.log("ok");
        res.status(200).json({
          message: 1
        });
      }
    )
    .catch(
      result => {
        console.log(result);

        res.status(200).json({
          message: 0
        });
      }
    );

});

router.post("/updateAccessories", (req, res, next) => {
  const postObject = req.body;
  const postData = postObject.product;
  const id = postObject.id;
  /*console.log("AAA");
  console.log(postObject);*/
  switch (postObject.category) {
    case "Gloves":
      const gloves = {
        name: postData.name,
        price: postData.price,
        quantity: postData.quantity,
        width: postData.width,
        length: postData.length
      };
      Gloves.updateOne({
          _id: id
        }, gloves).then(
          result => {
            console.log("ok");
            res.status(200).json({
              message: 1
            });
          }
        )
        .catch(
          result => {
            console.log(result);

            res.status(200).json({
              message: 0
            });
          }
        );
      break;

    case "Caps":
      const caps = {
        name: postData.name,
        price: postData.price,
        quantity: postData.quantity,
        width: postData.width
      };

      Caps.updateOne({
          _id: id
        }, caps).then(
          result => {
            console.log("ok");
            res.status(200).json({
              message: 1
            });
          }
        )
        .catch(
          result => {
            console.log(result);

            res.status(200).json({
              message: 0
            });
          }
        );
      break;
    case "Belts":
      const belts = {
        name: postData.name,
        price: postData.price,
        quantity: postData.quantity,
        length: postData.length
      };
      Belts.updateOne({
          _id: id
        }, belts).then(
          result => {
            console.log("ok");
            res.status(200).json({
              message: 1
            });
          }
        )
        .catch(
          result => {
            console.log(result);

            res.status(200).json({
              message: 0
            });
          }
        );
      break;
    case "HandBags":
      const handbags = {
        name: postData.name,
        price: postData.price,
        quantity: postData.quantity
      };
      HandBags.updateOne({
          _id: id
        }, handbags).then(
          result => {
            console.log("ok");
            res.status(200).json({
              message: 1
            });
          }
        )
        .catch(
          result => {
            console.log(result);

            res.status(200).json({
              message: 0
            });
          }
        );
      break;
  }


  console.log("123");
  //console.log(clothes);


});

module.exports = router;
