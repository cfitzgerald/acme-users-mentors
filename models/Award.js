const db = require('./db');
const Sequelize = db.Sequelize;

const faker = require('faker');

const Award = db.define('award', {
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

// Award.generateFakeDescription = () => {

// };

// exports
module.exports = Award;
