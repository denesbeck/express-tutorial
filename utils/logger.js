const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date();
  const timestamp =
    time.getFullYear() +
    '-' +
    (time.getMonth() + 1).toString().padStart(2, '0') +
    '-' +
    time.getDate().toString().padStart(2, '0') +
    ' ' +
    time.getHours().toString().padStart(2, '0') +
    ':' +
    time.getMinutes().toString().padStart(2, '0') +
    ':' +
    time.getSeconds().toString().padStart(2, '0');
  console.log(`
    method: ${method}
    url: ${url}
    timestamp: ${timestamp}
    `);
  next();
};

module.exports = logger;
