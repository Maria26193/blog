var express = require('express');
var router = express.Router();
var userModel = require('./users');
/* GET home page. */
router.get('/', function(req, res, next) {
  req.session.userName ="Altamash";
  req.session.val =true;
  // Set Cookies Data Cookies Data use two param (param , value)
  res.cookie("userName","Maria");
  res.render('index', { title: 'Maria' });
  console.log(req.cookies);

});
router.get('/sess',function(req,res){
  if(req.session.val === true){
    res.send("You Are Altaanddd");
  }
});
// For Add User
router.get('/add', async function(req, res, next) {
  const addUser = await userModel.create({
    name : "Razia",
    age:"32",
    fatherName: "Badrul Islam",
    motherName: "Shamima Khatoon",
    blogNote: "This is Comment From Sania"
  })

  console.log(req.session);
  res.send(addUser);
});
router.get('/destroy', function( req, res){
  req.session.destroy(function(err){
    console.log("Session Destroy");
  })
})
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
