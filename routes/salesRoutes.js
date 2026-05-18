const express = require('express');
const router = express.Router();
const Sale = require('../models/Sale');
const Stock = require('../models/Stock');

// sales dashboard
router.get('/salesdashboard', (req, res) => {
  res.render('salesdashboard');
});
router.post('/salesdashboard', (req, res) => {
  console.log(req.body);
});

// record sale
router.get('/recordsale', async (req, res) => {
  try {
    const products = await Stock.find({ quantity: { $gt: 0 } });
    res.render('recordsale', { products });
  } catch (error) {
    res.status(500).send('server error');
    console.log('error', error.message);
  }
});

router.post('/recordsale', async (req, res) => {
  try {
    const { customerName, customerPhone, customerAddress, customerDistance, productId, quantity, sellingPrice, paymentMethod, transportCharge } = req.body;
    const totalAmount = parseInt(quantity) * parseFloat(sellingPrice);
    const product = await Stock.findById(productId)
    if(!product) return res.status(404).send('Product not found')
    if(product.quantity < quantity) {
      return res.status(400).send('Not enough stock available')
    }
    // deduct quantity sold from stock quantity and save the new quantity to the stock collection
    product.quantity -= quantity
    await product.save()

    // Record the sale
    const newSale = new Sale({
      customerName,
      customerPhone,
      customerAddress,
      customerDistance,
      product: productId,
      quantity,
      sellingPrice,
      paymentMethod,
      transportCharge: transport || 0,
      attendant: req.user._Id,
      totalAmount
    });
    console.log(newSale);
    await newSale.save();
    res.redirect('/salesdashboard')
  } catch (error) {
    console.error(error);
    res.render('recordsale', { error: error.message });
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