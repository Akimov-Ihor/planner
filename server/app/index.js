import { con } from '../db';

const fs = require('fs');

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.options('*', cors());

app.use(bodyParser.json());

app.get('/api/users', (req, res) => {
  try {
    const data = fs.readFileSync(`${__dirname}/constants/users.json`, 'utf8');
    const formattedData = JSON.parse(data);
    res.json(formattedData);
  } catch (err) {
    res.status(500).send('Something broke!');
  }
});

app.get('/api/plans', (req, res) => {
  try {
    const data = fs.readFileSync(`${__dirname}/constants/plans.json`, 'utf8');
    const formattedData = JSON.parse(data);
    res.json(formattedData);
  } catch (err) {
    res.status(500).send('Something broke!');
  }
});

app.get('/api/plans/:userId', (req, res) => {
  try {
    console.log(req.params);
    // con.query('SELECT * FROM "plans" WHERE users.id =$1 ', ['1'], (err, data) => console.log(data.rows));
    // (!err && row.rows.length ? res.send(row.rows) : res.status(404).send('Plans not found'))
    // );
    // (!err && row.rows.length ? res.send(row.rows) : res.status(404).send('User not found')));
  } catch (err) {
    res.status(500).send('Something broke!');
  }
});

app.post('/api/plan/', (req, res) => {
  try {
    const data = fs.readFileSync(`${__dirname}/constants/plans.json`, 'utf8');
    const newData = JSON.parse(data);
    newData.push(req.body);
    // fs.writeFile(`${__dirname}/constants/plans.json`, JSON.stringify(newData), (err) =>
    // (!err ? res.status(200).send('Create new plan') : res.send(err)));
  } catch (err) {
    res.status(500).send('Something broke!');
  }
});

app.delete('/api/plan/:id', (req, res) => {
  try {
    // const data = fs.readFileSync(`${__dirname}/constants/plans.json`, 'utf8');
    // const parsingData = JSON.parse(data);
    // const newData = parsingData.filter((plan) => JSON.stringify(req.params.id) !==
    // JSON.stringify(plan.id.toString()));

    // fs.writeFile(`${__dirname}/constants/plans.json`, JSON.stringify(newData), (err) =>
    //     (!err ? res.status(200).send('Delete plan') : res.send(err)));
  } catch (err) {
    res.status(500).send('Something broke!');
  }
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  try {
    con.query('SELECT * FROM "users" WHERE username = $1 AND password = $2',
      [username, password],
      (err, row) => (!err && row.rows.length ? res.send(row.rows) : res.status(404).send('User not found')));
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
