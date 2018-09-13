var express = require('express');
var app = express();
const mongoose = require('mongoose')
const users = require('./routes/user')

mongoose.connect('mongodb://localhost/quotes',{ useNewUrlParser: true })
mongoose.set('useCreateIndex', true)
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('konek')
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users',users)

module.exports = app