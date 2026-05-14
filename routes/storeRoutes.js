const express = require('express');
const router = express.Router();

// storedashboard
router.get('/storemanager', (req, res) => {
  res.render('storedashboard');
});
router.post('/storemanager', (req, res) => {
  console.log(req.body);
});

// add stock
router.get('/addstock', (req, res) => {
  res.render('addstock');
});
router.post('/addstock', (req, res) => {
  console.log(req.body);
  res.redirect('/addstock');
});

// inventory
router.get('/inventory', (req, res) => {
  res.render('inventory');
});
router.post('/inventory', (req, res) => {
  console.log(req.body);
});

// pricing
router.get('/pricing', (req, res) => {
  res.render('pricing');
});
router.post('/pricing', (req, res) => {
  console.log(req.body);
  res.redirect('/pricing');
});



module.exports = router;