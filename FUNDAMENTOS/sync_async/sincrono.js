const fs = require('fs');

console.log("Antes");

fs.writeFileSync("arquivo.txt", "Olá");

console.log("Fim")