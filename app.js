var crudRouter = require('./routes/crud-route');
const express = require('express');
const bodyParser = require('body-Parser');
const app = express()
app.set("view engine", "ejs");

app.use('/', crudRouter);
//app.get('/', function (req, res) {
 //   res.redirect('crud-form')
 // })

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

  app.listen(3000)
  console.log("ok");