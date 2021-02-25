import { con } from '../db';
import { plansRouter } from '../routes/plans/plansRouter';
import { usersRouter } from '../routes/users/usersRouter';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');

const app = express();

require('../config/passport');

app.use(cors());
app.options('*', cors());

app.use(bodyParser.json());
app.use(passport.initialize());

app.use('/api', plansRouter);
app.use('/api', usersRouter);

const port = 5000;

con.connect((err) => (err ? console.log('Error connecting to Db') : console.log('Connection established')));

app.listen(port, () => console.log(`Server start on port ${port}`));
