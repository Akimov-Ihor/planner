import { con } from '../db';

module.exports = (app) => app.post('/api/plans/', (req, res) => {
  try {
    const reqBody = req.body;
    con.query('INSERT INTO "plans" (title, description, date, id, user_id) VALUES ($1 ,$2 ,$3, $4 ,$5) ',
      [reqBody.title, reqBody.description, reqBody.date, reqBody.id, reqBody.user_id],
      // eslint-disable-next-line no-unused-vars
      (err, data) => (!err
        ? res.status(200).send({ message: 'Create Success' })
        : res.status(404).send('Plans not found')));
  } catch (err) {
    res.status(500).send('Something broke!');
  }
});
