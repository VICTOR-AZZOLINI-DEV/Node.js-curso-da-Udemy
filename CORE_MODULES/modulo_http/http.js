const http = require("http");

const port = 8020;

const server = http.createServer(function(req, res){
    
    res.write("Hello World!")
    res.end( )

})

server.listen(port, () => {
    console.log("O servidor está rodando na porta: 8020");
})