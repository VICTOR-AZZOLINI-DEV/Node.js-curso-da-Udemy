const http = require("http");

const port = 8020;

const server = http.createServer(function(req, res){
    res.statusCode = 300;
    res.setHeader("Contenty-type", 'text-html');
    res.end('<h1>Olá este é meu primeiro programa</h1>')

})

server.listen(port, () => {
    console.log("O servidor está rodando na porta: 8020");
})