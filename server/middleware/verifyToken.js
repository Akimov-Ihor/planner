import jwt from 'jsonwebtoken';

export const authenticateToken = (req, res, next) => {
  // Gather the jwt access token from the request header
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401); // if there isn't any token

  return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,
    (err, data) => {
      if (err) return res.sendStatus(403);
      const { password, ...userData } = data.user;
      req.userData = userData;
      return next(); // pass the execution off to whatever request the client intended
    });
};
