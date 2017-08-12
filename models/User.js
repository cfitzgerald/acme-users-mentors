const Sequelize = require('sequelize');

const db = require('./db');

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});
// Users can have mentor
// Users can have mentee(s)
// Users can have award(s)

module.exports = User;
