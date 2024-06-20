const prompt = require("prompt-sync")()

const nasc = Number(prompt("Digite seu ano de nascimento: "))
const idade = 2024 - nasc

console.log(`Idade: ${idade}`)
if (idade >= 18) {
	console.log("Maior de idade")
} else {
	console.log("Menor de idade")
}

// Tudo certo!
