const faker = require('faker');

module.exports = (User, Award) => {
  let shrimply, minotaur, testy, scroopy;
  return Promise.all([
    User.create({ name: 'Shrimply Pibbles' }),
    User.create({ name: 'Minotaur' }),
    User.create({ name: 'Testy McGee' }),
    User.create({ name: 'Scroopy Noopers', mentorId: 1 })
  ])
    .then(([ _shrimply, _minotaur, _testy, _scroopy ]) => {
      shrimply = _shrimply;
      minotaur = _minotaur;
      testy = _testy;
      scroopy = _scroopy;
      return Promise.all([
        Award.create({ description: 'Most Important Being in the Galaxy', userId: shrimply.id }),
        Award.create({ description: faker.company.catchPhrase(), userId: shrimply.id }),
        Award.create({ description: 'A-Maze-ing!', userId: minotaur.id }),
        Award.create({ description: faker.company.catchPhrase(), userId: scroopy.id })
      ]);
    })
    .then(([ shrimplyAward1, shrimplyAward2, minotaurAward, scroopyAward ]) => {
      return {
        shrimply,
        minotaur,
        testy,
        scroopy,
        shrimplyAward1,
        shrimplyAward2,
        minotaurAward,
        scroopyAward,
      };
    });
};
