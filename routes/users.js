
var express = require('express');
var router = express.Router();

router.get('/user', function(req, res, next){
  let sql = 'SELECT * FROM usuarios';

  conexa.query(sql, function(erro, retorno){
    res.render('dados', {usuarios:retorno})
  });
});

router.get('/perfil', function(req, res, next) {
  res.render('perfil', {title: 'Perfil'});
});

router.get('/treino', function(req, res, next){
  res.render('treino', {title: 'Treino'});
});

router.get('/playlist', function(req, res, next){
  res.render('playlist', {title: 'playlist'});
});


module.exports = router;
