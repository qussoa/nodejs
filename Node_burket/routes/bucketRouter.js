var express = require("express");
var router = express.Router();
var bucketVO = require("../models/becketVO");
var moment = require("moment");
require("moment-timezone");
var cors = require("cors");

var app = express();
app.use(cors());
var corsOption = {
  origin: "http://localhost:3000",
  optionSuccessStatus: 200
};

moment.tz.setDefault("Asia/Seoul");

router.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-requested-With");

  bucketVO.find({}).exec((err, data) => {
    console.log(data);
    res.json(data);
  });
});

router.post("/insert", (req, res) => {
  req.body.b_startDate = moment().format("MM[-]DD");
  var bucket = new bucketVO(req.body);

  bucket.save((err, data) => {
    res.json(data);
  });
});

router.put("/", (req, res) => {
  console.log("check", req.body);
  console.log(req.body);
  if (req.body.b_goalDate === "") {
    req.body.b_goalDate = moment().format("MM[-]DD");
  } else {
    req.body.b_goalDate = "";
  }

  // var bucket = new bucketVO(req.body);

  // update 명령은 새로운 값을 만들지 않고 기본 VO에서 upodate() 호출
  bucketVO
    .updateOne({ _id: req.body._id }, { $set: req.body })
    .exec((err, result) => {
      res.json(result);
    });
});

router.delete("/", (req, res) => {
  console.log(req.body);
  bucketVO.deleteOne({ _id: req.body._id }).exec((err, data) => {
    if (err) {
      res.json;
    } else {
      res.json(data);
    }
  });
});
module.exports = router;
