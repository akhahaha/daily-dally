// web.js
var express = require("express");
var logfmt = require("logfmt");
var api = require("dd-api");
var app = express();

app.use(logfmt.requestLogger());
app.use(express.json());
app.use('/site', express.static(__dirname + '/site'));

app.get('/', api.redirect);
app.get('/showAllUsers', api.showAllUsers);
app.get('/addUser/:name', api.addUser);
app.get('/addActivity/:username/:name/:unit', api.addActivity);
app.get('/removeAllShit', api.removeAllUsers);
app.get('/upload/:username/:date/:metricVal/:media/:desc', api.uploadProgress);
app.get('/populate', api.populateDB);
app.post('/login', api.login);
api.post('/register', api.login);

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});