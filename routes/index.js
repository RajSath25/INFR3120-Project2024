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
  // Fetch the ciphers data from the database or any other source
  const ciphers = [
    { id: 1, firstName: 'John', lastName: 'Doe', plaintext: 'hello', ciphertext: 'ifmmp', key: '1' },
    { id: 2, firstName: 'Jane', lastName: 'Doe', plaintext: 'world', ciphertext: 'xpsme', key: '1' }
  ];
  
  res.render("Cipher/list", { title: "Cipher", ciphers: ciphers });
});

module.exports = router;
