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
          const{product, quantity, unitCost, unitPrice, supplierName, supplierPhone, factoryName, paymentStatus} = req.body;
          const totalPaid = parseInt(quantity) * parseFloat(unitPrice); 
      
          const newItem = new Stock({
            product, 
            quantity, 
            unitCost, 
            unitPrice, 
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
      const{productName, unitCost, sellingPrice} = req.body;
  
      const newPricing = new Pricing({
        productName, 
        unitCost, 
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