var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Musicians Website' });
});

router.get('/KumarSonu', function(req, res, next) {
  res.render('KumarSonu');
});

router.get('/ShreyaGhoshal', function(req, res, next) {
  res.render('ShreyaGhoshal');
});

router.get('/SonuNigam', function(req, res, next) {
  res.render('SonuNigam');
});

router.get('/UditNarayan', function(req, res, next) {
  res.render('UditNarayan');
});

module.exports = router;
