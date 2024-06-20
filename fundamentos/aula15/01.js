const prompt = require("prompt-sync")()

const num1 = Number(prompt("Digite um numero: "))
const num2 = Number(prompt("Digite outro numero: "))
const num3 = Number(prompt("Digite mais um numero: "))

if (num1 > num2 && num1 > 3) {
	console.log(`Maior numero: ${num1}`)
} else if (num2 > num3 && num2 > num1) {
	console.log(`Maior numero: ${num2}`)
} else {
	console.log(`Maior numero: ${num3}`)
}

// Tudo certo!
