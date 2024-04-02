const jwt = require('jsonwebtoken');

function verifyJWT(req, res, next) {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  console.log(authHeader);

  if (!authHeader?.startsWith('Bearer'))
    return res.status(401).json({ error: 'unauthorized' });

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'You are unauthorized' });
  }
}

module.exports = verifyJWT;
