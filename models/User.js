const db = require('./db');
const Sequelize = db.Sequelize;

const faker = require('faker');

// const Award = require('./award');

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  }
});

// User.findUsersViewModel()
User.findUsersViewModel = () => {
  return User.findAll({ // w/ eager loading to get associations
    // if the assocation is aliased (using the as option), you must specify this alias
    include: [
      { model: User, as: 'mentor' },
      { model: db.models.Award }, // pulling in from index.js -> models: { User, Award } export?
    ]
  })
    .then( (users) => {
      console.log('findUsersViewModel results = ', users);
      return users;
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
User.updateUserFromRequestBody = (id, body) => {
  return User.update({ }, { });
};

// User.generateAward(req.params.id)
User.generateAward = (id) => {
  return db.models.Award.create({ description: faker.company.catchPhrase(), userId: id });
};

// User.removeAward(req.params.userId, req.params.id)
User.removeAward = (userId, awardId) => {
  return db.models.Award.destroy({ where: { id: awardId }});
};

// // Create!
// User.prototype.create = (name) => {
//   return db.models.User.create({ name: name });
// };

// exports
module.exports = User;
