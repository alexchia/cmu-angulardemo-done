var express = require('express')
  , http = require('http')
  , request = require('request')

var app = express();

app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/static'));

var router = express.Router();
  
app.get('/', function(req, res) {
  res.render('index');
});

app.get('/api/getinfo/:id', function(req, res) {
  var id = req.params.id;
  console.log("id = " + id);
  res.json({id:id});
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'))
});
