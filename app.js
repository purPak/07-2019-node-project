const express = require('express');
const mongoose = require('mongoose');
const nunjucks = require('nunjucks');


//Connect to Db
mongoose.connect('mongodb://localhost/hackhaton', { useNewUrlParser: true});
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
const routes = require('./routes/hackhaton');
routes(app);
//app.use('/', require('./routes/hackhaton.js'));
//app.use('/admin', require('./routes/admin.js'));

//Connect to Express server
app.listen(port,hostname, ()=> {
    console.log(`Server running at http://${hostname}:${port}/`);
})

// Set up the rendering with Nunjucks
nunjucks.configure('views',{
    autoescape : true,
    express : app
})
