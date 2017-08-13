const db = require('./db');
const User = require('./User');
const Award = require('./Award');

// associations
Award.belongsTo(User, { as: 'recipient' });
User.hasMany(Award);
// User.hasOne(User, { as: 'mentor' });
// User.belongsTo(User, { as: 'mentee '});

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
  User,
  Award,
  sync,
  seed
};
