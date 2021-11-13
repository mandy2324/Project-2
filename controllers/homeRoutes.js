const router = require('express').Router();
const { Favorite, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {

    // Get all favorites and JOIN with user data
    const favoriteData = await favorite.findAll({
// =======
//     // Get all favorite and JOIN with user data
//     const favoriteData = await Favorite.findAll({
// >>>>>>> main
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it

    const favorites = favoriteData.map((favorite) =>
      favorite.get({ plain: true })
    );

    // Pass serialized data and session flag into template
    res.render('homepage', {
      favorites,
// =======
//     const favorite = favoriteData.map((favorite) => favorite.get({ plain: true }));

//     // Pass serialized data and session flag into template
//     res.render('search', {
//       favorite,
// >>>>>>> main
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/favorite/:id', async (req, res) => {
  try {

    const favoriteData = await favorite.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
// =======
//     const favoriteData = await Favorite.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
// >>>>>>> main
        },
      ],
    });

    const favorite = favoriteData.get({ plain: true });

    res.render('favorite', {
      ...favorite,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route

router.get('/profile', withAuth, async (req, res) => {
// =======
// router.get('/search', withAuth, async (req, res) => {
// >>>>>>> main
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },

      include: [{ model: favorite }],
// =======
//       include: [{ model: Favorite }],
// >>>>>>> main
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
// =======
//     res.render('search', {
// >>>>>>> main
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {

    res.redirect('/profile');
// =======
//     res.redirect('/search');
// >>>>>>> main
    return;
  }

  res.render('login');
});

module.exports = router;
