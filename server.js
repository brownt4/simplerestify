var util = require('util'),
    restify = require('restify'),
    restifyValidator = require('restify-validator');

var server = restify.createServer({
     name: 'simplerestify'
});

server.get(/.*/, restify.serveStatic({
    'directory': 'src/html/',
    'default': 'index.html'
 }));

server.use(restify.bodyParser());
server.use(restify.queryParser());
server.use(restifyValidator);

server.post('/', function(req, res) {
  req.assert('firstname', 'Invalid first name').isAlpha();
  req.assert('lastname', 'Invalid last name').isAlpha();
  req.assert('email', 'Invalid email address').isEmail();
  req.assert('bday', 'Invalid birth day').isDate();
  req.assert('username', 'Invalid user name').is(/.{6,}/);
  req.assert('pass1', 'Invalid password').is(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).+$/).equals(req.params.pass2);

  var errors = req.validationErrors();
  if (errors) {
    res.send(500 ,'There have been validation errors: ' + util.inspect(errors));
    return;
  }
  res.send(201);
});

server.listen(8000, function() {
  console.log('%s listening at %s', server.name, server.url);
});
