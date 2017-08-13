const http = require('http');
const server = http.createServer();
const port = process.env.PORT || 3000;

// db
const models = require('./models');

server.on('request', require('./app'));

// sync, seed, and listen
models.sync()
  .then( () => {
    return models.seed();
  })
  .then( () => {
    // console.log('server.js --> seed = ', seed);
    server.listen(port, () => {
      console.log(`acme-users-mentors listening on ${port}...`);
    });
  })
  .catch(console.error);
