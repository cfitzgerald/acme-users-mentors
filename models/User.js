const db = require('./db');
const Sequelize = db.Sequelize;

const faker = require('faker');

const Award = require('./award');

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  }
});

// User.findUsersViewModel()
User.findUsersViewModel = () => {
  return User.findAll({})
    .then( (results) => {
      console.log('findUsersViewModel results = ', results);
      return results;
    });
};

// User.create(req.body)
// User.create = (user) => {

// };

// User.destroyById(req.params.id)
User.destroyById = (id) => {
  return User.destroy({ where: { id: id } });
};

// User.updateUserFromRequestBody(req.params.id, req.body)
User.updateUserFromRequestBody = (id, user) => {
  return User.update({ }, { });
};

// User.generateAward(req.params.id)
User.generateAward = (id) => {

};

// User.removeAward(req.params.userId, req.params.id)
User.removeAward = (awardId, userId) => {

};

// // Create!
// User.prototype.create = (name) => {
//   return db.models.User.create({ name: name });
// };

// exports
module.exports = User;
