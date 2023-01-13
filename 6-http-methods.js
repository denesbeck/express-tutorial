const express = require('express');
const app = express();

const persons = require('./data/persons');

// static assets
app.use(express.static('./methods-public'));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

app.use('/api/persons', require('./routes/persons'));
app.use('/login', require('./routes/auth'));

app.listen(3000, () => console.log(`Server is listening on port 3000...`));
