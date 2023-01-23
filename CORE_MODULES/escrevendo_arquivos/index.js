const http = require("http");
const fs = require("fs");

const port = 8020;

const server = http.createServer(function(req, res){
    const urlnfo = require('url').parse(req.url, true);
    const name = urlnfo.query.name;

    if (!name) {
        fs.readFile("index.html", function(err, data){
            res.writeHead(200, "Content-type", "text/html");
            res.write(data);
            return res.end();
        })
    } else {
        fs.writeFile("arquivo.txt", name, function(err, dat){
            res.writeHead(302, {
                Location: "/"
            })
            return res.end()
        })
        
    }
});

server.listen(port, () => {
    console.log("O servidor está rodando na porta: 8020");
});