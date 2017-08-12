const Sequelize = require('sequelize');

const db = require('./db');
const User = require('./User');
const Award = require('./Award');

Award.belongsTo(User, { as: 'recipient' });

const sync = () => {
  return db.sync({ force: true });
};

const seed = () => {
  return require('./seed')(User, Award);
};

module.exports = {
  User,
  Award,
  sync,
  seed
};
