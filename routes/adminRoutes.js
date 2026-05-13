const express = require('express');
const router = express.Router();

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
router.post('/users', (req, res) => {
  console.log(req.body);
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
router.post('/users', (req, res) => {
  console.log(req.body);
});

// Deposit Registration 
router.get('/depositRegistration', (req, res) => {
  res.render('depositReg');
});
router.post('/depositRegistration', (req, res) => {
  console.log(req.body);
});

// Deposit Tracking
router.get('/depositTracking', (req, res) => {
  res.render('depositTrack');
});
router.post('/depositTracking', (req, res) => {
  console.log(req.body);
});

// Deposit Collection
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
});

// Reports
router.get('/depositCollection', (req, res) => {
  res.render('depositCollect');
});
router.post('/depositCollection', (req, res) => {
  console.log(req.body);
});

// Analytics
router.get('/analytics', (req, res) => {
  res.render('analytics');
});
router.post('/analytics', (req, res) => {
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