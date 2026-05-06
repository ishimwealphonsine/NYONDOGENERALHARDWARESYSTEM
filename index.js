// 1. Dependencies
const express = require('express');
const expressSession = require('express-session');
const path = require('path');

// 2. Instantiations
const app = express();
const port = 3000;

// 3. Configuration
// Set templating engine to pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'))

// 4. Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Logging middleware to log the time of each request
app.use((req, res, next) => {
  console.log('A new request received at ' + Date.now());
  next();
});

app.use(expressSession({
  secret: 'thisIsMyNyondoStockProject',
  resave: false,
  saveUninitialized: false
}));




// 5. Routes
app.use('/', require('./routes/indexRoutes'));
app.use('/', require('./routes/stockRoutes'));

// Handling non-existent routes
app.use((req, res) => {
  res.status(404).send('Oops! Route not found');
});

// 6. Bootstrap Server
app.listen(port, () => console.log(`listening on port ${port}`));