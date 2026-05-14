const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Deposits = require('../models/Deposits');

// admin dashboard
router.get('/admindashboard', (req, res) => {
  res.render('admindashboard');
});
router.post('/admindashboard', (req, res) => {
  console.log(req.body);
});

// user management
router.get('/users', (req, res) => {
  res.render('usermanagement');
});
router.post('/users', async(req, res) => {
  try {
    const{fullName, email, nin, role, password} = req.body;
    let existingUser = await User.findOne({email:email.toLowerCase()});
    if(existingUser){
      return  res.render('usermanagement', {error: 'User is already registered'});
    }
    // Create new user
    const newUser = new User({
      fullName, 
      email: email.toLowerCase(),
      nin: nin.toLowerCase(), 
      role, 
      password
    })
    console.log(newUser);
    await newUser.save();
    res.redirect('/users')
  } catch (error) {
    console.error(error);
    res.render('usermanagement', {error: error.message});
  }
   
});

// supplier Credit
router.get('/credit', (req, res) => {
  res.render('suppliercredit');
});
router.post('/credit', (req, res) => {
  console.log(req.body);
});

// transport charges
router.get('/transport', (req, res) => {
  res.render('transport');
});
router.post('/transport', (req, res) => {
  console.log(req.body);
  res.redirect('/transport');
});

// Deposit Registration 
router.get('/depositRegistration', (req, res) => {
  res.render('depositReg');
});
router.post('/depositRegistration', (req, res) => {
  try {
    const{fullName, nin, phoneNumber, selectedProduct, quantity, sellingPrice, moneyDeposited, customerDistance}
  } catch (error) {
    
  }
  console.log(req.body);
});

// Deposit Tracking
router.get('/depositTracking', (req, res) => {
  res.render('depositTrack');
});
router.post('/depositTracking', (req, res) => {
  console.log(req.body);
});

// Deposit Tracking
router.get('/depositTracking', (req, res) => {
  res.render('depositTrack');
});
router.post('/depositTracking', (req, res) => {
  console.log(req.body);
});

// Reports
router.get('/reports', (req, res) => {
  res.render('reports');
});
router.post('/reports', (req, res) => {
  console.log(req.body);
  res.redirect('/reports');
});

// Deposit Collection
router.get('/depositCollection', (req, res) => {
  res.render('depositCollect');
});
router.post('/depositCollection', (req, res) => {
  console.log(req.body);
});

// Settings
router.get('/settings', (req, res) => {
  res.render('settings');
});
router.post('/settings', (req, res) => {
  console.log(req.body);
});









module.exports = router;