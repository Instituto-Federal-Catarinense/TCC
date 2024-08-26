
const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index',{ title: 'Bem-Vindo' });
});

router.get('/sobreNos', function(req, res, next) {
  res.render('sobreNos', { title: 'Sobre Nós' });
});

router.get('/treino', function(req, res, next) {
  res.render('treino', {title: 'Treino'});
});

router.get('/perfil', function(req, res, next) {
  res.render('perfil', {title: 'Perfil'});
});

router.get('/cadastro', function(req, res, next) {
  res.render('cadastro', {title: 'Cadastro'});
});

router.get('/playlist', function(req, res, next){
  res.render('playlist', {title: 'playlist'});
});
module.exports = router;
