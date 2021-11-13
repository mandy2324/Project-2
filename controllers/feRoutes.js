const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('login');
});

router.get('/favorites', (req, res) => {
  res.render('favorites');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/details', (req, res) => {
  res.render('details');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/search', (req, res) => {
  res.render('search');
});

router.get('/registered', (req, res) => {
  res.render('registered');
});

router.get('/loggedin', (req, res) => {
  res.render('loggedin');
});

module.exports = router;
