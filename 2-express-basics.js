const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Home Page');
});

app.get('/about', (req, res) => {
  res.status(200).send('About Page');
});

app.all('*', (req, res) => {
  res.status(404).send('<h1>404 Page</h1><p>Resource not found</p>');
});

app.listen(5000, () => console.log(`Server is listening on port 5000...`));
