const router = require('express').Router();
const userRoutes = require('./userRoutes');
const movieRoutes = require('./movieRoutes');
const userApiRoutes = require('./user-api-routes');
const favoriteRoutes = require('./favorite-api-routes');

router.use('/favorites', favoriteRoutes);
router.use('/users', userRoutes);
router.use('/movies', movieRoutes);
router.use('/user', userApiRoutes);

module.exports = router;
