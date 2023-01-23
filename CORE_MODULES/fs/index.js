const http = require("http");
const fs = require("fs");

const port = 8020;

const server = http.createServer(function(req, res){
    fs.readFile("mensagem.html", function(err, data){
        res.writeHead(200, "Content-type", "text/html");
        res.write(data);
        return(res.end())
    })
});

server.listen(port, () => {
    console.log("O servidor está rodando na porta: 8020");
});