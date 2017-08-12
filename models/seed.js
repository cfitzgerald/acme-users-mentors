module.exports = (User, Award)=> {
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
      Award.create({ recipientId: shrimply.id, description: 'Most Important Being in the Galaxy' }),
      Award.create({ recipientId: minotaur.id, description: 'A-Maze-ing!' }),
      Award.create({ recipientId: testy.id, description: 'Participation Award' }),
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
