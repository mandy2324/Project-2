const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const feRoutes = require('./feRoutes');

router.use('/', feRoutes);
router.use('/api', apiRoutes);
router.use('/homeRoutes', homeRoutes);

module.exports = router;
