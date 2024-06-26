const prompt = require("prompt-sync")()

const num = Number(prompt("Digite um numero: "))

if ((num >= 5 && num < 10) || num <= 2 || num >= 20) {
	console.log("Verdadeiro")
} else {
	console.log("Falso")
}
