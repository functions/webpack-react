var http = require('http');
var fs = require('fs');

var port = 5000;


http.createServer(function (req, res) {
    console.log('access: ' + req.url);

    // will get you  '/' or 'index.html' or 'css/styles.css' ...
    // • you need to isolate extension
    // • have a small mimetype lookup array/object
    // • only there and then reading the file
    // •  delivering it after setting the right content type
    fs.readFile('./html/index.html', 'utf8', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });

}).listen(port);

console.log("listening on port " + port)