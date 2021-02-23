const bcrypt = require('bcrypt');

export const checkPassword = (password, hash) => new Promise((resolve, reject) => {
  bcrypt.compare(password, hash, (err, result) => {
    if (result) {
      resolve(result);
    }
    reject(new Error('Invalid password!'));
  });
});
