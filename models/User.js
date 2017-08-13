const db = require('./db');
const Sequelize = db.Sequelize;

const Award = require('./award');

// Users can have mentor
// Users can have mentee(s)
// Users can have award(s)
const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  mStatus: {
    type: Sequelize.STRING
  }
});

// User.findUsersViewModel()
User.findUsersViewModel = () => {
  return User.findAll({})
    .then( (results) => {
      console.log('findUsersViewModel results = ', results);
      return results;
    })
    .catch(console.error);
};

// User.create(req.body)
User.create = (user) => {

};

// User.destroyById(req.params.id)
User.destroyById = (id) => {
  return User.destroy({
    where: { id: id }
  })
  .catch(console.error);
};

// User.updateUserFromRequestBody(req.params.id, req.body)
User.updateUserFromRequestBody = (id, user) => {

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
