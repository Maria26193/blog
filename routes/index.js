var express = require('express');
var router = express.Router();
var userModel = require('./users');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Maria' });
});
// For Add User
router.get('/add', async function(req, res, next) {
  const addUser = await userModel.create({
    name : "Sania",
    age:"32",
    fatherName: "Badrul Islam",
    motherName: "Shamima Khatoon",
    blogNote: "This is Comment From Sania"
  })
  res.send(addUser);
});
// Fetch All Data
router.get('/list', async function(req, res, next) {
  const allUser = await userModel.find()
  res.send(allUser);
});
// Fetch single  Data
router.get('/one-list', async function(req, res, next) {
  const oneUser = await userModel.findOne({name:"Sania"})
  res.send(oneUser);
});
// Delete single  Data
router.get('/delete', async function(req, res, next) {
  const oneUserDel = await userModel.findOneAndDelete({name:"Maria"})
  res.send(oneUserDel);
});

module.exports = router;
