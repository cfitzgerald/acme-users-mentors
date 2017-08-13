// const http = require('http');
// const server = http.createServer();
const app = require('./app');
const port = process.env.PORT || 3000;

// db
const models = require('./models');
// const User = models.User;
// const Award = models.Award;

// server.on('request', require('./app'));

// sync, seed, and listen
models.sync()
  .then( () => {
    return models.seed();
  })
  .then( (seed) => {
    app.listen(port, () => {
      console.log(`acme-users-mentors listening on ${port}...`);
    });
  })
  .catch(console.error);
