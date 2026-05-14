const express = require('express');
const router = express.Router();

// login
router.get('/login', (req, res) => {
  res.render('login');
});
router.post('/login', (req, res) => {
  console.log(req.body);
  res.redirect('/dashboard');
});






module.exports = router;