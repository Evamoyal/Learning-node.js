import{createServer} from 'node:http';

const server = createServer(( req, res) => {

    res.writeHead(500, {'content-type': 'text/html'});
    res.end('server is running');

});


server.listen(3000, '127.0.0.1', () => {
    console.log('serving is listening');

});


 // Arrow Functions
 function handleRequest() {}
 const handleRequest = () => {}
    
