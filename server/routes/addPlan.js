import { authenticateToken } from '../middleware/verifyToken';
import { PlanController } from '../controllers/planController';

module.exports = (app) => app.post('/api/plans/', authenticateToken, async (req, res) => {
  try {
    const {
      // eslint-disable-next-line camelcase
      title, description, date, id, user_id,
    } = req.body;
    await PlanController.addPlan({
      title, description, date, id, user_id,
    });
    res.status(200).send({ message: 'Create Success ' });
  } catch (err) {
    res.status(500).send('Something broke!');
  }
});
