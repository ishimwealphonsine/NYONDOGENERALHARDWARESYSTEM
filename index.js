// 1. Dependencies
const express = require('express');
const expressSession = require('express-session');
const path = require('path');

// 2. Instantiations
const app = express();
const port = 3000;

// 3. Configuration

// 4. Middleware
// Logging middleware to log the time of each request
app.use((req, res, next) => {
  console.log('A new request received at ' + Date.now());
  next();
});

app.use(express.urlencoded({ extended: true }));

app.use(expressSession({
  secret: 'thisIsMyNyondoStockProject',
  resave: false,
  saveUninitialized: false
}));

app.use(express.static(path.join(__dirname, 'public')));


// 5. Routes

// Serving html files
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});





// Handling non-existent routes
app.use((req, res) => {
  res.status(404).send('Oops! Route not found');
});

// 6. Bootstrap Server
app.listen(port, () => console.log(`listening on port ${port}`));