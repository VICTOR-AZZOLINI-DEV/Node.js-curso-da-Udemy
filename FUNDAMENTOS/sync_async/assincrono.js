const fs = require('fs');

console.log("Antes");

fs.writeFile("arquivo1.txt", "Olá", function(err){
    setTimeout(() => {
        console.log("Arquivo criado")
        }, 3000)    
    }
)

console.log("Depois");