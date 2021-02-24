import { con } from '../db';
import { checkPassword } from '../routes/crypt';

export class UserController {
  static async getAllUsers() {
    try {
      const users = await con.query('SELECT * FROM "users"');
      return users.rows[0];
    } catch (e) {
      throw new Error(e);
    }
  }

  static async login({ username, password }) {
    try {
      const user = await con.query('SELECT * FROM "users" WHERE username = $1', [username]);
      try {
        await checkPassword(password, user.rows[0].password);
        return user.rows[0];
      } catch (e) {
        throw new Error(e);
      }
    } catch (e) {
      throw new Error(e);
    }
  }

  static async registration({
    username, password, age, email, company, id, gender, name,
  }) {
    try {
      await con.query('INSERT INTO "users" (username, password, age, email, company, id,gender,name)'
          + ' VALUES ($1 ,$2 ,$3, $4 ,$5,$6,$7,$8)',
      [username, password, age, email, company, id, gender, name]);
      return {
        username, age, email, company, id, gender, name,
      };
    } catch (e) {
      throw new Error(e);
    }
  }
}
