import passport from 'passport';
import jwt from 'jsonwebtoken';
import jwtSecret from '../config/jwtConfig';
import { UserController } from '../controllers/userController';

module.exports = (app) => app.post('/api/login',
  passport.authenticate('login'), async (req, res) => {
    const { username, password } = req.body;

    try {
      const userData = await UserController.login({ username, password });
      res.json({ userData, token: jwt.sign({ user: userData }, jwtSecret.secret) });
    } catch (err) {
      res.status(500).send({ err });
    }
  });
