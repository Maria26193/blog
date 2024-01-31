// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;

const mongoose = require('mongoose');
// Database create from belowline
mongoose.connect("mongodb://127.0.0.1:27017/blog");

const userSchema = mongoose.Schema({
  name:"string",
  age:"number",
  fatherName: "string",
  motherName: "string",
  blogNote: "string"
})

module.exports = mongoose.model("user",userSchema);
