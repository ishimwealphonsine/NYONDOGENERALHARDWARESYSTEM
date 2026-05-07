const express = require('express');
const router = express.Router();

// stock dashboard
router.get('/stock-management', (req, res) => {
  res.render('stockmanagement');
});
router.post('/stockmanagement', (req, res) => {
  console.log(req.body);
});

router.get('/add-stock', (req, res) => {
  res.render('addstock');
});
router.post('/add-stock', (req, res) => {
  console.log(req.body);
});





module.exports = router;