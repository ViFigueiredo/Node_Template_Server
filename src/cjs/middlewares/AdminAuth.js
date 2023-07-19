const jwt = require('jsonwebtoken');
const secret = process.env.JWTSECRET;

module.exports = (req, res, next) => {
  try {
    const authToken = req.headers.authorization; // "bearer jwt"
    if (authToken != undefined) {
      const bearer = authToken.split(' '); // ["bearer", "jwt"]
      const token = bearer[1]; // "jwt"
      const decoded = jwt.verify(token, secret);

      if (decoded.role == 0) return next(); // Admin?
      res.status(403);
      return res.send('Não autorizado!');
    }
    res.status(403);
    return res.send('Não autorizado!');
  } catch (err) {
    res.status(403);
    return res.send('Erro interno!');
  }
};
