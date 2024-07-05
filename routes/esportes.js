var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('esportes', { title: 'Aqui há uma aba de esportes' });
});

router.get('/futebol', function(req, res, next) {
    res.render('esportes', { title: 'História do futebol' });
  });

module.exports = router;