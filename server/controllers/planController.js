/* eslint-disable camelcase */
import { con } from '../db';

export class PlanController {
  static async addPlan({
    title, description, date, id, user_id,
  }) {
    try {
      await con.query('INSERT INTO "plans" (title, description, date, id, user_id) '
          + 'VALUES ($1 ,$2 ,$3, $4 ,$5) ',
      [title, description, date, id, user_id]);
    } catch (e) {
      throw new Error(e);
    }
  }

  static async deletePlan({ id }) {
    try {
      await con.query('DELETE FROM "plans" WHERE id = $1',
        [id]);
    } catch (e) {
      throw new Error(e);
    }
  }

  static async getAllPlans() {
    try {
      const plans = await con.query('SELECT * FROM "plans"');
      return plans.rows[0];
    } catch (e) {
      throw new Error(e);
    }
  }

  static async getUserPlans({ user_id }) {
    try {
      const data = await con.query('SELECT * FROM "plans" WHERE user_id = $1 ',
        [user_id]);
      return data.rows;
    } catch (e) {
      throw new Error(e);
    }
  }
}
