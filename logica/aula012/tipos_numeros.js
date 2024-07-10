const prompt = require('prompt-sync')();

const num1 = Number(prompt("Digite o primeiro número: "));
const num2 = Number(prompt("Digite o segundo número: "));

if (num1 % 2 == 0 && num2 % 2 == 0) {
	console.log("Os dois números são pares")
} else if (num1 % 2 == 1 && num2 % 2 == 1) {
	console.log("Os dois números são ímpares")
} else {
	console.log("Os dois números são misturados")
}
