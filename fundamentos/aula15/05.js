const prompt = require("prompt-sync")()

const num1 = Number(prompt("Digite um numero: "))
const num2 = Number(prompt("Digite outro numero: "))

if ((num2 % num1 == 0) || (num1 % num2 == 0)) {
	console.log("Sao multiplos.")
} else {
	console.log("Nao sao multiplos")
}

// Tudo certo!
