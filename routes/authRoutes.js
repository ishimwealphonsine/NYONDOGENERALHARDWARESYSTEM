const express = require('express');
const router = express.Router();
const passport = require('passport');

// Importing a model
const User = require('../models/User')

// login
router.get('/login', (req, res) => {
  res.render('login');
});
router.post('/login', passport.authenticate('local', {failureRedirect: '/login'}), (req, res) => {
  if (req.user.role == 'Accounts/Admin') {
    res.redirect('/admindashboard')
  } else if (req.user.role == 'Store Manager') {
    res.redirect('/storemanager')
  } else if (req.user.role == 'Sales Attendant') {
    res.redirect('/salesdashboard')
  } else {
    res.redirect('/')
  }
});

// logout
router.get('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect('/')
  })
})




module.exports = router;