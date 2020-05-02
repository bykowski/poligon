const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/angular-heroku'));

app.post('/*', function(req, res){
  res.sendFile(__dirname +  '/dist/angular-heroku/index.html');
});
app.listen(4200);

