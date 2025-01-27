var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About'});
});

router.get('/project', function(req, res, next) {
  res.render('index', { title: 'Project'});
});

router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact'});
});


module.exports = router;
