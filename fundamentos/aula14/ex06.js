const prompt = require("prompt-sync")()

const num = Number(prompt("Digite um número: "))

if (num % 2 == 0) {
	console.log("É par")

} else {
	console.log("É impar")
}
