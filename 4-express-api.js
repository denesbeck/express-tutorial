const express = require('express');
const app = express();

const products = require('./data/products.json');
const persons = require('./data/persons.json');

app.get('/', (req, res) => {
  res.status(200).send(`<h1>Home Page</h1><a href="/api/products">Products</a>`);
});

app.get('/api/products', (req, res) => {
  const overview = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.status(200).json(overview);
});

app.get('/api/products/:id', (req, res) => {
  const { id } = req.params;
  const details = products.find((product) => product.id === parseInt(id));

  if (!details) return res.status(404).send('<h1>404 Page</h1><p>Resource not found</p>');
  res.status(200).json(details);
});

app.get('/api/v1/products/query', (req, res) => {
  let result = [...products];

  const { search, limit } = req.query;

  const lastSearch = search.map ? search[search.length - 1] : search;

  if (search) result = result.filter((product) => product.name.toLowerCase().startsWith(lastSearch.toLowerCase()));
  if (limit) result = result.slice(0, limit);

  if (result.length < 1) return res.status(200).json({ success: true, data: [] });

  res.status(200).json(result);
});

app.get('/api/v1/persons', (req, res) => {
  const { id, name } = req.query;
  console.log('🚀 ~ file: 4-express-api.js:29 ~ app.get ~ id, name', id, name);

  const person = persons.find(
    (person) => (!id || person.id === parseInt(id)) && (!name || person.name.toLowerCase() === name.toLowerCase())
  );
  if (!person) return res.status(404).send('<h1>404 Page</h1><p>Resource not found</p>');
  res.status(200).json(person);
});

app.all('*', (req, res) => {
  res.status(404).send('<h1>404 Page</h1><p>Resource not found</p>');
});

app.listen(5000, () => console.log(`Server is listening on port 5000...`));
