/* eslint-disable camelcase */
import { Router } from 'express';
import { authenticateToken } from '../../middleware/verifyToken';
import { PlanController } from '../../controllers/planController';

export const plansRouter = Router();

plansRouter.post('/plans/', authenticateToken, async (req, res) => {
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

plansRouter.post('/plan/:id', authenticateToken, async (req, res) => {
  try {
    const {
      // eslint-disable-next-line camelcase
      title, description, id,
    } = req.body;
    await PlanController.editPlan(title, description, id);
    res.status(200).send({ message: 'Edit Success ' });
  } catch (err) {
    res.status(500).send('Something broke!');
  }
});

plansRouter.delete('/plan/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    await PlanController.deletePlan({ id });
    res.status(200).send({ message: 'Delete Success' });
  } catch (err) {
    res.status(500).send('Something broke!');
  }
});

plansRouter.get('/plans', authenticateToken, async (req, res) => {
  try {
    await PlanController.getAllPlans();
    res.status(200).send('Success');
  } catch (err) {
    res.status(500).send('Something broke!');
  }
});

plansRouter.get('/plans/:userId', authenticateToken, async (req, res) => {
  try {
    const user_id = req.params.userId;
    const data = await PlanController.getUserPlans({ user_id });
    res.json(data);
  } catch (err) {
    res.status(500).send('Something broke!');
  }
});
