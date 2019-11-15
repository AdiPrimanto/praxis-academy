var http = require('http');
var op = require('./module.js');

http.createServer(function(re1, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h3>'+op.title+'</h3>');
    res.write('12 + 30 = ' + op.tambah(12,30));
    res.write('<br><br>');
    
})