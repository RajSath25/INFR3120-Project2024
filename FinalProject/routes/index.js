var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index", {title: "Home"});
});

router.get('/home', function(req, res, next) {
  res.render("index", {title: "Home"});
});


router.get('/cipher', function(req, res, next) {
  res.render("index", {title: "Cipher"});
});

module.exports = router;
