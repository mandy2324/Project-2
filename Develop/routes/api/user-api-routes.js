const User = require('./models/User.js');

const router = require('express').Router();
router.post('/', (req, res) => {
  User.create({ username: req.body.username, password: req.body.password })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
