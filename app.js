
var express = require("express");
var bodyParser = require("body-parser");
const MongoClient    = require('mongodb').MongoClient;
const app = express();
const db  = require('./config/db');
const port = 3000;


//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err)
	  
  require('./routes')(app, database);
  
  app.listen(port, () => {
    console.log('We are live on ' + port);
  });               
})


