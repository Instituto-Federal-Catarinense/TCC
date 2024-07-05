var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('rotaNova', { title: 'Eu não me chamo Daniel' });
});

router.get('/teste', function(req, res, next) {
  res.render('rotaNova', { title: 'Eu não me chamo Daniel-2(É mentira!)' });
});

module.exports = router;