const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('search', { h1value: 'User Registery' });
});

router.get('/fav', (req, res) => {
    res.render('favorites', { h1value: 'favorites' });
});



module.exports = router;