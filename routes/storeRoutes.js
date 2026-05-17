const express = require('express');
const router = express.Router();
const Pricing = require('../models/Pricing');
const Stock = require('../models/Stock');

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
router.post('/addstock', async(req, res) => {
  try {
          const{product, quantity, costPrice, sellingPrice, supplierName, supplierPhone, factoryName, paymentStatus} = req.body;
          const totalPaid = parseInt(quantity) * parseFloat(sellingPrice); 
      
          const newItem = new Stock({
            product, 
            quantity, 
            costPrice, 
            sellingPrice, 
            totalPaid,
            supplierName, 
            supplierPhone, 
            factoryName, 
            paymentStatus
          });
          await newItem.save();
          res.redirect('/storemanager')
        } catch (error) {
          console.error(error);
          res.render('addstock', {error: error.message});
        }
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
router.post('/pricing', async(req, res) => {
  try {
      const{productName, costPrice, sellingPrice} = req.body;
  
      const newPricing = new Pricing({
        productName, 
        costPrice, 
        sellingPrice
      });
      console.log(newPricing);
      await newPricing.save();
      res.redirect('/pricing')
    } catch (error) {
      console.error(error);
      res.render('pricing', {error: error.message});
    }
});



module.exports = router;