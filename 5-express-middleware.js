const express = require('express');
const app = express();
const logger = require('./utils/logger');
const authorize = require('./utils/authorize');

/*
 * Attach middleware functions individually:
 *  app.use('/api', logger);
 *  app.use(authorize);
 *
 *  OR
 *
 *  app.get('/', (req, res) => {
 *    res.send('<h1>Home</h1>');
 *  });
 *
 * app.get('/api/products', [authorize, logger], (req, res) => {
 * res.send('Products');
 * });
 *
 */

app.use([authorize, logger]);

app.get('/', (req, res) => {
  res.send(`<h1>Hello, ${req.user.name}! Welcome to the Home page!</h1>`);
});
app.get('/about', (req, res) => {
  res.send('<h1>About</h1>');
});
app.get('/api/products', (req, res) => {
  res.send('Products');
});
app.get('/api/persons', (req, res) => {
  res.send('Persons');
});

app.listen(3000, () => console.log(`Server is listening on port 3000...`));
