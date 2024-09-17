var http = require('http');

// Create a server object:
http.createServer(function (req, res){
    res.write('Hello World 2!');
    res.end();
}).listen(8080)