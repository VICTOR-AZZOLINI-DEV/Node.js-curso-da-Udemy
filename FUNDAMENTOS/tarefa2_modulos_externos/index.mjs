import inquirer from "inquirer";
import chalk from "chalk"

inquirer.prompt([
    {
        name: 'p1',
        message: "Qual é o seu nome"
    },
    {
        name: 'p2',
        message: "Qual a sua idade?"
    }
]).then((answers) => {

    if (!answers.p1 || !answers.p2 ){
        throw new Error("Nome ou idade não foram preenchidos")
    }

    console.log(chalk.bgYellow.black(`O seu nome é ${answers.p1} e tem ${parseInt(answers.p2)} anos`));

}).catch(err => {
    console.log(err);
})