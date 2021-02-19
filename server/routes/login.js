import passport from 'passport';
import jwt from 'jsonwebtoken';
import { con } from '../db';
import jwtSecret from '../config/jwtConfig';

module.exports = (app) => app.post('/api/login',
  passport.authenticate('login'), (req, res) => {
    const { username, password } = req.body;
    try {
      con.query('SELECT * FROM "users" WHERE username = $1 AND password = $2',
        [username, password],
        (err, row) => (!err && row.rows.length ? res.send([row.rows]) : res.status(404).send('User not found')));
    } catch (err) {
      res.status(500).send({ err });
    }
  });
