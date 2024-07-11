var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('esportes', { title: 'Aqui há uma aba de esportes' });
});

router.get('/futebol', function(req, res, next) {
    res.render('futebol', { title: 'História do futebol' });
});

router.get('/basquete', function(req, res, next) {
  res.render('basquete', { title: 'História do basquete' });
});

router.get('/rugby', function(req, res, next) {
  res.render('rugby', { title: 'História do rugby' });
});

router.get('/volei', function(req, res, next) {
  res.render('volei', { title: 'História do volei' });
});

module.exports = router;