const Sequelize = require('sequelize');

const db = require('./db');

const Award = db.define('award', {
  description: {
    type: Sequelize.STRING // temp
  }
});

module.exports = Award;
