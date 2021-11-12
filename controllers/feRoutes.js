const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('search', { h1value: 'User Registery' });
});

router.get('/fav', (req, res) => {
    res.render('favorites', { h1value: 'favorites' });
});

router.get('/login', (req, res) => {
    res.render('login', { h1value: 'login' });
});

router.get('/details', (req, res) => {
    res.render('details', { h1value: 'details' });
});

router.get('/signup', (req, res) => {
    res.render('signup', { h1value: 'signup' });
});


module.exports = router;