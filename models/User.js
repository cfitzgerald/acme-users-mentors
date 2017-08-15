const db = require('./db');
const Sequelize = db.Sequelize;

const faker = require('faker');

// const Award = require('./award'); // can use db.models.award instead

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
      { model: db.models.award }, // pulling in from index.js -> models: { User, Award } export?
    ]
  })
    .then( (users) => {
      // console.log('findUsersViewModel results = ', users);
      // filter mentors from users object
      // user has at least two awards
      // mentor can't be the user...
      mentors = users.filter(user => {
        return user.awards.length >= 2;
      })
      return { users, mentors };
    });
};

// User.destroyById(req.params.id)
User.destroyById = (id) => {
  return User.destroy({ where: { id: id } });
};

// User.updateUserFromRequestBody(req.params.id, req.body)
User.updateUserFromRequestBody = (id, body) => {
  console.log('id = ', id);
  console.log('body = ', body);
  return User.update({ mentorId: body.mentorId }, { where: { id: id }});
};

// User.generateAward(req.params.id)
User.generateAward = (id) => {
  return db.models.award.create({ description: faker.company.catchPhrase(), userId: id });
};

// User.removeAward(req.params.userId, req.params.id)
User.removeAward = (userId, awardId) => {
  return db.models.award.destroy({ where: { id: awardId }});
};

// exports
module.exports = User;
