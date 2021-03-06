var express = require('express');
var router = express.Router();
var knex = require('../db/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Login Taco-Valet'
  });
});

router.get('/orderpage', function(req, res, next) {
  knex('users').then(function(names) {
    console.log(names);
    res.render('orderpage', {
      users: names[names.length - 1]
    });
  });
});

router.post('/login', function(req, res, next) {
  knex('users').insert(req.body).then(function() {
    res.redirect('/orderpage');
  });
});

module.exports = router;
