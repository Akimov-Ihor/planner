import { authenticateToken } from '../middleware/verifyToken';
import { PlanController } from '../controllers/planController';

module.exports = (app) => app.get('/api/plans', authenticateToken, async (req, res) => {
  try {
    await PlanController.getAllPlans();

    res.status(200).send('Success');
  } catch (err) {
    res.status(500).send('Something broke!');
  }
});
