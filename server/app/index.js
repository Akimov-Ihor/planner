import { con } from '../db';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');

const app = express();

require('../config/passport');

app.use(cors());
app.options('*', cors());

app.use(bodyParser.json());
app.use(passport.initialize());

require('../routes/addPlan.js')(app);
require('../routes/deletePlan.js')(app);
require('../routes/getAllPlans.js')(app);
require('../routes/getAllUsers.js')(app);
require('../routes/getUserPlans.js')(app);
require('../routes/login.js')(app);

const port = 5000;

con.connect((err) => (err ? console.log('Error connecting to Db') : console.log('Connection established')));
app.listen(port, () => console.log(`Server start on port ${port}`));
