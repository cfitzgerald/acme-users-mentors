const db = require('./db');
const Sequelize = db.Sequelize;

const Award = db.define('award', {
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

// exports
module.exports = Award;
