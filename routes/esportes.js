


var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('esportes');
});

router.get('/futebol', function(req, res, next) {
    res.render('futebol');
});

router.get('/basquete', function(req, res, next) {
  res.render('basquete');
});

router.get('/rugby', function(req, res, next) {
  res.render('rugby');
});

router.get('/volei', function(req, res, next) {
  res.render('volei');
});

router.get('/paintball', function(req, res, next) {
  res.render('paintball');
});


module.exports = router;