const http = require('http');
const server = http.createServer();
const port = process.env.PORT || 3000;

// db
const models = require('./models');
const User = models.User;
const Award = models.Award;

server.on('request', require('./app'));

//sync creates the table if it does not exist. Force true drops the table first if it exists
//order matters because we cannot drop the User table if there are items in the Page table that reference it
User.sync({})
  .then( () =>  {
      return Award.sync({});
  })
  .then( () => {
    server.listen(port, () => {
        console.log(`acme-mentors-pg listening on ${port}...`);
    });
  })
  .catch(console.error);
