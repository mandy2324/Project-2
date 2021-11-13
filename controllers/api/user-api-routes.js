const User = require('../../models/User.js');

const router = require('express').Router();
router.post('/signup', (req, res) => {
    User.create({ email: req.body.email, username: req.body.name, password: req.body.password })
        .then((data) => {
          console.log(data);
          res.json(data)})
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/login', (req, res) => {
  console.log("also here")
  User.findOne({ where: { email: req.body.email } })
    .then((user) => {
      console.log(user)
      const verifiedPassword = user.checkPassword(req.body.password);
      if (!verifiedPassword) {
        res.json({ message: 'Password verification failed' });
        return;
      }
      req.session.save(() => {
          req.session.user_id = user.id,
          req.session.username = user.username,
          req.session.loggedIn = true
          res.status(200).json(user);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/logout', (req, res) => {
  console.log(req.session)
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});
module.exports = router