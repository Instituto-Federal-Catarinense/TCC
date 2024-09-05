
const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.render('index',{ title: 'Bem-Vindo' });
});

router.get('/sobreNos', function(req, res) {
  res.render('sobreNos', { title: 'Sobre Nós' });
});

router.get('/treinos', function(req, res) {
  res.render('treinos', {title: 'Treino'});
});

router.get('/perfil', function(req, res) {
  res.render('perfil', {title: 'Perfil'});
});

router.get('/cadastro', function(req, res) {
  res.render('cadastro', {title: 'Cadastro'});
});

router.get('/playlist', function(req, res){
  res.render('playlist', {title: 'playlist'});
});

module.exports = router;
