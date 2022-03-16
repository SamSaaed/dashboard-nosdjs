var mongoose = require('mongoose');
const express = require('express');
const app = express()
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});
var conn = mongoose.connection;
conn.on('connected', function() {
    console.log('database is connected successfully');
});
conn.on('error', console.error.bind(console, 'connection error:'));
module.exports = conn;

//var crudRouter = require('./routes/crud-route');

//app.use('/crud', crudRouter);