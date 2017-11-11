var server = require('http');

server.createServer(engine).listen(1337);

function engine(request, response)
{
    response.writeHead(200,{'content-Type': 'text/plain'});
    response.end('Hi oleg, this is my first server.');

}
