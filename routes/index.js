var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{ title: 'Página Inicial' });
});

router.get('/sobreNos', function(req, res, next) {
  res.render('sobreNos', { title: 'Sobre Nós' });
});

router.get('/contato', function(req, res, next) {
  res.render('contato', { title: 'Contato' });
});

module.exports = router;
