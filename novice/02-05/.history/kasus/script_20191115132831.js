var http = require('http');
var op = require('./module.js');

http.createServer(function(re1, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h3>'+op.title+)
})