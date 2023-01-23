const http = require("http");

const port = 8020;

const server = http.createServer(function(req, res){
    const urlnfo = require("url").parse(req.url, true);

    const name = urlnfo.query.name;

    res.statusCode = 300;
    res.setHeader("Contenty-type", 'text-html');

    if (!name){
        res.end("<h1>Preencha seu nome: </h1><form method='GET'><input type='text' name='name'/><input type='submit' value='Enviar'/></form>")
        console.log(name);
    }else {
        res.end(`<h1>Olá ${name}</h1>`);
    }

})

server.listen(port, () => {
    console.log("O servidor está rodando na porta: 8020");
})