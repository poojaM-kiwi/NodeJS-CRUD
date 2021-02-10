var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = 8080;
mongoose.connect('mongodb://localhost:27017/education',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) return console.log(`app.js err ${err}`);
    return console.log('Connected to MongoDB');
  });

var books = require('./routes/books');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/books', books);

app.get('/', function(req, res){
    console.log('app starting on port: '+port)
    // res.send('Node Js CRUD application');
    res.status(200).json({
        name: 'Pooja'
    });
});

app.listen(port, function(){
    console.log('app listening on port: '+port);
});