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


// router.get('/login', (req, res) => {
//   res.render('login', { h1value: 'login' });
// });

// router.get('/signup', (req, res) => {
//   res.render('signup', { h1value: 'signup' });
// });

// router.get('/', (req, res) => {
//   res.render('search', { h1value: 'User Registery' });
// });

// router.get('/fav', (req, res) => {
//   res.render('favorites', { h1value: 'favorites' });
// });

// router.get('/details', (req, res) => {
//   res.render('/details', { h1value: 'details' });
// });


module.exports = router;
