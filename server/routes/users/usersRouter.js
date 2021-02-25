import { Router } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import { authenticateToken } from '../../middleware/verifyToken';
import { UserController } from '../../controllers/userController';
import jwtSecret from '../../config/jwtConfig';

const bcrypt = require('bcrypt');

export const usersRouter = Router();

usersRouter.get('/users', authenticateToken, async (req, res) => {
  try {
    const data = await UserController.getAllUsers();
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send('Something broke!');
  }
});

usersRouter.post('/login',
  passport.authenticate('login'), async (req, res) => {
    const { username, password } = req.body;
    try {
      const userData = await UserController.login({ username, password });
      res.json({ userData, token: jwt.sign({ user: userData }, jwtSecret.secret) });
    } catch (err) {
      res.status(500).send({ err });
    }
  });
usersRouter.post('/registration', async (req, res) => {
  const {
    username, password, age, email, company, id, gender, name,
  } = req.body;
  try {
    const hashedPassword = await new Promise((resolve, reject) => {
      bcrypt.hash(password, 10, (err, hash) => {
        if (err) reject(err);
        resolve(hash);
      });
    });

    const newUser = await UserController.registration({
      username,
      age,
      email,
      company,
      id,
      gender,
      name,
      password: hashedPassword,
    });

    res.json({ userData: newUser, token: jwt.sign({ userData: newUser }, jwtSecret.secret) });
  } catch (err) {
    res.status(500).send({ err });
  }
});

usersRouter.post('/verifyAuth', authenticateToken, (req, res) => {
  try {
    res.status(200).send({
      userData: req.userData,
      token: req.headers.authorization.split(' ')[1],
    });
  } catch (err) {
    res.status(500).send('Something broke!');
  }
});
