const express = require('express');
const router = express.Router();

// sales dashboard
router.get('/salesdashboard', (req, res) => {
  res.render('salesdashboard');
});
router.post('/salesdashboard', (req, res) => {
  console.log(req.body);
});

// record sale
router.get('/recordsale', (req, res) => {
  res.render('recordsale');
});
router.post('/recordsale', (req, res) => {
  console.log(req.body);
});

// stock check
router.get('/stockcheck', (req, res) => {
  res.render('stockcheck');
});
router.post('/stockcheck', (req, res) => {
  console.log(req.body);
});

// receipts
router.get('/receipts', (req, res) => {
  res.render('receipts');
});
router.post('/receipts', (req, res) => {
  console.log(req.body);
});






module.exports = router;