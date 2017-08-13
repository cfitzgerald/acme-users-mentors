const faker = require('faker');

module.exports = (User, Award) => {
  let shrimply, minotaur, testy;
  return Promise.all([
    User.create({ name: 'Shrimply Pibbles' }),
    User.create({ name: 'Minotaur' }),
    User.create({ name: 'Testy McGee' })
  ])
    .then(([ _shrimply, _minotaur, _testy ]) => {
      shrimply = _shrimply;
      minotaur = _minotaur;
      testy = _testy;
      return Promise.all([
        Award.create({ description: 'Most Important Being in the Galaxy', userId: shrimply.id }),
        Award.create({ description: 'A-Maze-ing!', userId: minotaur.id }),
        Award.create({ description: faker.company.catchPhrase(), userId: testy.id })
      ]);
    })
    .then(([ shrimplyAward, minotaurAward, testyAward ]) => {
      return {
        shrimply,
        minotaur,
        testy,
        shrimplyAward,
        minotaurAward,
        testyAward
      };
    });
};
