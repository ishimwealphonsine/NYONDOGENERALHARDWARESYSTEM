const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Deposits = require('../models/Deposits');
const Reports = require('../models/Report');

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
router.post('/users', async (req, res) => {
  try {
    const { fullName, email, nin, role, password} = req.body;
    let existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.render('usermanagement', { error: 'User is already registered' });
    }
    // Create new user
    const newUser = new User({
      fullName,
      email: email.toLowerCase(),
      nin: nin.toUpperCase(),
      role,
    })
    console.log(newUser);
    await User.register(newUser, req.body.password, (err) => {
      if(err) {
        return res.redirect('/usermanagement');
      }
        res.redirect('/usermanagement');
    })
  } catch (error) {
    console.error(error);
    res.render('usermanagement', { error: error.message });
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
router.post('/transport', async (req, res) => {
  try {
    const { fromDate, toDate } = req.body;

    const transportCharges = new transportCharges({
      fromDate,
      toDate
    });
    console.log(transportCharges);
    await transportCharges.save();
    res.redirect('/transport')
  } catch (error) {
    console.error(error);
    res.render('transport', { error: error.message });
  }
});

// Deposit Registration 
router.get('/depositRegistration', (req, res) => {
  res.render('depositReg');
});
router.post('/depositRegistration', async (req, res) => {
  try {
    const { fullName, nin, phoneNumber, selectedProduct, quantity, sellingPrice, moneyDeposited, customerDistance } = req.body;

    const newDeposit = new Deposits({
      fullName,
      nin: nin.toUpperCase(),
      phoneNumber,
      selectedProduct,
      quantity,
      sellingPrice,
      moneyDeposited,
      customerDistance
    });
    console.log(newDeposit);
    await newDeposit.save();
    res.redirect('/depositRegistration')
  } catch (error) {
    console.error(error);
    res.render('usermanagement', { error: error.message });
  }
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
router.post('/reports', async (req, res) => {
  try {
    const { reportType, startDate, endDate, exportFormat } = req.body;

    const newReports = new Reports({
      reportType,
      startDate,
      endDate,
      exportFormat
    });
    console.log(newReports);
    await newReports.save();
    res.redirect('/reports')
  } catch (error) {
    console.error(error);
    res.render('reports', { error: error.message });
  }
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