var express = require('express');
var bodyParser = require('body-parser')
var path = require('path')
var app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'))



app.get('/', function(req, res) {
res.sendFile(path.join(__dirname,  'index.html'));
});



app.listen(PORT, function() {
	console.log('You are connected at this port '+ PORT)
})