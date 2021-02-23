import { authenticateToken } from '../middleware/verifyToken';

module.exports = (app) => app.post('/api/verifyAuth', authenticateToken, (req, res) => {
  try {
    res.status(200).send({
      userData: req.userData,
      token: req.headers.authorization.split(' ')[1],
    });
  } catch (err) {
    res.status(500).send('Something broke!');
  }
});
