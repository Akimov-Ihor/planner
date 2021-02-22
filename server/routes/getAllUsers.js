import { con } from '../db';
import { authenticateToken } from '../middleware/verifyToken';

module.exports = (app) => app.get('/api/users', authenticateToken, (req, res) => {
  try {
    con.query('SELECT * FROM "users"',
      // eslint-disable-next-line no-unused-vars
      (err, data) => (!err
        ? res.status(200).send('Success')
        : res.status(404).send('Users not found')));
  } catch (err) {
    res.status(500).send('Something broke!');
  }
});
