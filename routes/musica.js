

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('musica', { title: 'Musica'} );
});

router.get('/rock', function(req, res, next) {
    res.render('rock');
});

router.get('/pop', function(req, res, next) {
    res.render('pop');
});

router.get('/jazz', function(req, res, next) {
    res.render('jazz');
});

router.get('/funk', function(req, res, next) {
    res.render('funk');
});

router.get('/reagge', function(req, res, next) {
    res.render('reagge');
});

module.exports = router;