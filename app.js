const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const override = require('method-override');
const path = require('path');
const pug = require('pug');

const app = express();

// middleware
app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));
app.use(express.static('public')); // serve up the static files in /public
app.use(bodyParser.urlencoded({ extended: false }));
app.use(override('_method')); // use the _method param on the url
app.use(morgan('dev'));

// pug setup
app.set('views', './views'); // set 'views' to specify the templates dir
app.set('view engine', 'pug'); // set 'view engine' to specify pug

// handle the root route
app.get('/', (req, res, next) => {
  res.render('index');
});

// handle routes to users.js
app.use('/users', require('./routes/users'));

// handle errors
app.use((err, req, res, next) => {
  // console.error(err);
  // res.status(err.status || 500).send(err.message || "Internal Error");
  res.render('error', { error: err });
});

// exports
module.exports = app;
