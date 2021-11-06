const router = require('express').Router();
const favoriteRoutes = require("./favorite-api-routes");
const userApiRoutes = require("./user-api-routes");

router.use("/favorites", favoriteRoutes);
router.use("/user", userApiRoutes);

module.exports = router;
