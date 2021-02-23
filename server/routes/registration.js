import jwt from 'jsonwebtoken';
import jwtSecret from '../config/jwtConfig';
import { UserController } from '../controllers/userController';

const bcrypt = require('bcrypt');

module.exports = (app) => app.post('/api/registration', async (req, res) => {
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
