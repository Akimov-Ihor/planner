const { Pool } = require('pg');

export const con = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'postgres',
  database: 'planner',
  port: '5432',
});
