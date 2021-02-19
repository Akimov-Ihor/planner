import { con } from '../db';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();

app.use(cors());
app.options('*', cors());

const authenticateToken = (req, res, next) => {
  // Gather the jwt access token from the request header
  const authHeader = req.headers.Authorization;
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401); // if there isn't any token

  return jwt.verify('token', process.env.ACCESS_TOKEN_SECRET,
    (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      return next(); // pass the execution off to whatever request the client intended
    });
};

app.use(bodyParser.json());

app.get('/api/users', (req, res) => {
  try {
    con.query('SELECT * FROM "users"',
      (err, data) => (!err
        ? res.status(200).send('Success')
        : res.status(404).send('Users not found')));
  } catch (err) {
    res.status(500).send('Something broke!');
  }
});

app.get('/api/plans', (req, res) => {
  try {
    con.query('SELECT * FROM "plans"',
      (err, data) => (!err
        ? res.status(200).send('Success')
        : res.status(404).send('Plans not found')));
  } catch (err) {
    res.status(500).send('Something broke!');
  }
});

app.get('/api/plans/:userId', authenticateToken, (req, res) => {
  try {
    con.query('SELECT * FROM "plans" WHERE user_id = $1 ',
      [req.params.userId],
      (err, data) => (!err && data.rows.length
        ? res.send(data.rows)
        : res.status(404).send('Plans not found')));
  } catch (err) {
    res.status(500).send('Something broke!');
  }
});

app.post('/api/plans/', (req, res) => {
  try {
    const reqBody = req.body;
    con.query('INSERT INTO "plans" (title, description, date, id, user_id) VALUES ($1 ,$2 ,$3, $4 ,$5) ',
      [reqBody.title, reqBody.description, reqBody.date, reqBody.id, reqBody.user_id],
      (err, data) => (!err
        ? res.status(200).send({ message: 'Create Success' })
        : res.status(404).send('Plans not found')));
  } catch (err) {
    res.status(500).send('Something broke!');
  }
});

app.delete('/api/plan/:id', (req, res) => {
  try {
    con.query('DELETE FROM "plans" WHERE id = $1',
      [req.params.id],
      (err, data) => (!err
        ? res.status(200).send({ message: 'Delete Success' })
        : res.status(404).send({ message: 'Can`t delete plan' })));
  } catch (err) {
    res.status(500).send('Something broke!');
  }
});

function generateAccessToken(username) {
  return jwt.sign(username, process.env.ACCESS_TOKEN_SECRET, {});
}

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const token = generateAccessToken({ username: req.body.username });
  console.log(token);
  try {
    con.query('SELECT * FROM "users" WHERE username = $1 AND password = $2',
      [username, password],
      (err, row) => (!err && row.rows.length
        ? res.send(row.rows)
        : res.status(404).send('User not found')));
  } catch (err) {
    res.status(500).send({ err });
  }
});

const port = 5000;

con.connect((err) => {
  if (err) {
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

app.listen(port, () => console.log(`Server start on port ${port}`));
