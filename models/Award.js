const db = require('./db');
const Sequelize = db.Sequelize;

const Award = db.define('award', {
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  hooks: {
    beforeDestroy: () => {

    },
    afterDestroy: () => {

    },
  }
});

// exports
module.exports = Award;
