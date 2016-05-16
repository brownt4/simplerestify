var restify = require('restify');

var server = restify.createServer();
server.get(/.*/, restify.serveStatic({
    'directory': 'src/html/',
    'default': 'index.html'
 }));

server.listen(8000, function() {
  console.log('%s listening at %s', server.name, server.url);
});
