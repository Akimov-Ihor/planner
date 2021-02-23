import { authenticateToken } from '../middleware/verifyToken';

import { UserController } from '../controllers/userController';

module.exports = (app) => app.get('/api/users', authenticateToken, async (req, res) => {
  try {
    const data = await UserController.getAllUsers();

    res.status(200).send(data);
  } catch (err) {
    res.status(500).send('Something broke!');
  }
});
