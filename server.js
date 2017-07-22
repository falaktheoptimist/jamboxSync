var http = require('http') ;
var fs = require('fs') ;



var server = http.createServer(function (req, res) {
  console.log('request was made: ' + req.url) ;
  res.writeHead(200, {'Content-Type': 'text/plain'});

    var myReadStream = fs.createReadStream(__dirname + "/" + 'readMe.txt', 'utf8') ;
    var myWriteStream = fs.createWriteStream(__dirname + "/"+ 'writeMe.txt') ;
    myReadStream.pipe(myWriteStream) ;
    
  res.end('Hello World\n');
});


server.listen(1337, "127.0.0.1") ;
console.log('Server running at http://127.0.0.1:1337/');










// myReadStream.on('data', function(chunk){
//     console.log('new chunk received') ;
//     myWriteStream.write(chunk) ;
// })

