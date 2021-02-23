import { authenticateToken } from '../middleware/verifyToken';
import { PlanController } from '../controllers/planController';

module.exports = (app) => app.delete('/api/plan/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    await PlanController.deletePlan({ id });
    res.status(200).send({ message: 'Delete Success' });
  } catch (err) {
    res.status(500).send('Something broke!');
  }
});
