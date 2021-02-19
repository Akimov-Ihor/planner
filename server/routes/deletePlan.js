import { con } from '../db';

module.exports = (app) => app.delete('/api/plan/:id', (req, res) => {
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
