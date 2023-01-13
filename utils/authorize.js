const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === 'denes') {
    req.user = { id: 1, name: 'denes' };
    console.log('Authorized');
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
};

module.exports = authorize;
