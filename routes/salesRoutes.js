const express = require('express');
const router = express.Router();
const Sale = require('../models/Sale');

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
router.post('/recordsale', async(req, res) => {
  try {
        const{customerName, customerPhone, customerAddress, customerDistance, product, quantity, unitPrice, paymentMethod, transportCharge, totalAmount} = req.body;
    
        const newSale = new Sale({
          customerName, 
          customerPhone, 
          customerAddress, 
          customerDistance, 
          product, 
          quantity, 
          unitPrice, 
          paymentMethod, 
          transportCharge, 
          totalAmount
        });
        console.log(newSale);
        await newSale.save();
        res.redirect('/recordsale')
      } catch (error) {
        console.error(error);
        res.render('recordsale', {error: error.message});
      }
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