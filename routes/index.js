
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index',{ title: 'Bem-Vindo' });
});

router.get('/sobreNos', function(req, res, next) {
  res.render('sobreNos', { title: 'Sobre Nós' });
});

router.get('/cadastro', function(requ, res, next){
  res.render('cadastro', { title: 'Cadastro' });
});

router.get('/cadastro', function(req, res, next) {
  res.render('cadastro', {title: 'Cadastro'});
});

router.get('/perfil', function(req, res, next) {
  res.render('perfil', {title: 'Perfil'});
});

router.get('/treino', function(req, res, next) {
  res.render('treino', {title: 'Treino'});
});
module.exports = router;
