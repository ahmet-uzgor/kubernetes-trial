var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/deneme', function(req, res, next) {
  res.send({ message: 'New trial' })
});

module.exports = router;
