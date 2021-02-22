/* eslint-disable camelcase */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
// import bcrypt from 'bcrypt';
import jwtSecret from './jwtConfig';
import { con } from '../db';

// const jwt = require('jsonwebtoken');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

passport.use(
  'login',
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
      session: false,
    },
    (username, password, done) => {
      try {
        con.query('SELECT * FROM "users"', (err, data) => {
          if (data.rows.username === null) { return done(null, false, { message: 'bad username' }); }

          if (data.rows.password === null) { return done(null, false, { message: 'bad password' }); }

          if (data.rows.password === password && data.rows.username === username) { return done(null, data.rows); }
          return done(null, data.rows);
        });
      } catch (err) {
        done(err);
      }
    },
  ),
);
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

const opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme('JWT'),
  secretOrKey: jwtSecret.secret,
};

passport.use(
  'jwt',
  new JWTstrategy(opts, (jwt_payload, done) => {
    con.query('SELECT * FROM "users"', (err, data) => {
      if (data.rows.user) {
        console.log('user found in db in passport');
        done(null, data.rows.user);
      } else {
        console.log('user not found in db');
        done(null, false);
      }
    });
  }),
);
