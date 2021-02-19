import { con } from '../db';

module.exports = (app) => app.get('/api/plans', (req, res) => {
  try {
    con.query('SELECT * FROM "plans"',
      (err, data) => (!err
        ? res.status(200).send('Success')
        : res.status(404).send('Plans not found')));
  } catch (err) {
    res.status(500).send('Something broke!');
  }
});
