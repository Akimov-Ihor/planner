import { authenticateToken } from '../middleware/verifyToken';
import { PlanController } from '../controllers/planController';

module.exports = (app) => app.get('/api/plans/:userId', authenticateToken, async (req, res) => {
  try {
    const user_id = req.params.userId;
    const data = await PlanController.getUserPlans({ user_id });
    res.send(data);
  } catch (err) {
    res.status(500).send('Something broke!');
  }
});
