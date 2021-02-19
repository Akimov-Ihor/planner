import { con } from '../db';

module.exports = (app) => app.get('/api/users', (req, res) => {
  try {
    con.query('SELECT * FROM "users"',
      (err, data) => (!err
        ? res.status(200).send('Success')
        : res.status(404).send('Users not found')));
  } catch (err) {
    res.status(500).send('Something broke!');
  }
});
