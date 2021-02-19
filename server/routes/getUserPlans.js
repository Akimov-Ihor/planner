import { con } from '../db';

module.exports = (app) => app.get('/api/plans/:userId', (req, res) => {
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
