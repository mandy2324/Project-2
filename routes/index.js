const router = require('express').Router();
const apiRoutes = require('./api');
const feRoutes = require('./feRoutes');

router.use('/api', apiRoutes);
router.use('/', feRoutes);

module.exports = router;