const db = require('./db');

// models
const User = require('./User');
const Award = require('./Award');

// associations
User.hasMany(Award); // userId on Awards table
User.belongsTo(User, { as: 'mentor' }); // mentorId on Users table

// sync
const sync = () => {
  return db.sync({ force: true });
};

// seed
const seed = () => {
  return require('./seed')(User, Award); // pass in User and Award models
};

// exports
module.exports = {
  models: { User, Award },
  sync,
  seed
};
