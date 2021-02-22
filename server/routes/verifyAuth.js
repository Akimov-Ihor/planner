import { authenticateToken } from '../middleware/verifyToken';

module.exports = (app) => app.post('/api/verifyAuth', authenticateToken, (req, res) => {
  try {
    res.status(200).send({
      userData: req.userData,
      token: req.headers.authorization,
    });
  } catch (err) {
    res.status(500).send('Something broke!');
  }
});
