var http = require('http') ;
var fs = require('fs') ;



var server = http.createServer(function (req, res) {
  console.log('request was made: ' + req.url) ;
  res.writeHead(200, {'Content-Type': 'text/html'});

    var myReadStream = fs.createReadStream(__dirname + '/' + 'index.html', 'utf8') ;
    myReadStream.pipe(res) ;

  // res.end('Hello World\n');
});


server.listen(1338, "127.0.0.1") ;
console.log('Server running at http://127.0.0.1:1337/');










// myReadStream.on('data', function(chunk){
//     console.log('new chunk received') ;
//     myWriteStream.write(chunk) ;
// })


