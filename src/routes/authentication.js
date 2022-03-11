const authRoute = require('express').Router();
const jwt = require('jsonwebtoken');

authRoute.use((req, res, next) => {
    const token = req.headers['authorization'];
    if (token) {
      jwt.verify(token, process.env.KEY, (err, decoded) => {      
        if (err) {
          return res.json({ mensaje: 'Invalid token' });    
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      res.send({ 
          mensaje: 'Token not given' 
      });
    }
 });

 module.exports = authRoute;