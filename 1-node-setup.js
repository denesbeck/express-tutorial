const http = require('http');
const { readFileSync } = require('fs');

// get all files
const index = readFileSync('./pages/index.html');
const indexNavbar = readFileSync('./navbar-app/index.html');
const indexStyle = readFileSync('./navbar-app/styles.css');
const indexLogo = readFileSync('./navbar-app/logo.svg');
const indexLogic = readFileSync('./navbar-app/browser-app.js');

const about = readFileSync('./pages/about.html');

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(indexNavbar);
    res.end(index);
  } else if (url === '/styles.css') {
    res.writeHead(200, { 'Content-Type': 'text/css' });
    res.end(indexStyle);
  } else if (url === '/logo.svg') {
    res.writeHead(200, { 'Content-Type': 'image/svg+xml' });
    res.end(indexLogo);
  } else if (url === '/browser-app.js') {
    res.writeHead(200, { 'Content-Type': 'text/javascript' });
    res.end(indexLogic);
  } else if (url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(about);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 page</h1>');
  }
});

server.listen(5000);
