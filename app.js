const express = require('express');
const mongoose = require('mongoose');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');


//Connect to Db
mongoose.connect('mongodb://localhost/hackhaton' ,{useNewUrlParser : true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("App is connected to Mongo DB");
});

//Set up Express server
const app = new express();
const port = 3000;
const hostname = '127.0.0.1';

//Set up routing 
app.use('/', require('./routes/hackhaton.js'));
app.use('/admin', require('./routes/admin.js'));

//Set body-parser
app.use(bodyParser.urlencoded({extended : true}));

// Set up the rendering with Nunjucks
nunjucks.configure('views',{
    autoescape : true,
    express : app
});

//Connect to Express server
app.listen(port,hostname, ()=> {
  console.log(`Server running at http://${hostname}:${port}/`);
})