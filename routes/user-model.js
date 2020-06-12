const DBm = require('../database/db-config');

function findAll() {
  return DBm('users');
}

async function addUser(user) {
  const [id] = await DBm('users').insert(user, 'id');
  return DBm('users').where({ id }).first();
}

function removeUser(id) {
  return DBm('users').where({ id }).del();
}

module.exports = {
  findAll,
  addUser,
  removeUser,
};
