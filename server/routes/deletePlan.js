import { con } from '../db';
import { authenticateToken } from '../middleware/verifyToken';

module.exports = (app) => app.delete('/api/plan/:id', authenticateToken, (req, res) => {
  try {
    con.query('DELETE FROM "plans" WHERE id = $1',
      [req.params.id],
      // eslint-disable-next-line no-unused-vars
      (err, data) => (!err
        ? res.status(200).send({ message: 'Delete Success' })
        : res.status(404).send({ message: 'Can`t delete plan' })));
  } catch (err) {
    res.status(500).send('Something broke!');
  }
});
