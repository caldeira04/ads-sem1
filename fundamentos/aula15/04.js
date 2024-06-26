const prompt = require("prompt-sync")()

const nota1 = Number(prompt("Digite a 1a nota")) * 4
const nota2 = Number(prompt("Digite a 2a nota")) * 3
const nota3 = Number(prompt("Digite a 3a nota")) * 3

const media = (nota1 + nota2 + nota3) / 10
console.log(`Media: ${media}`)

if (media < 7) {
	console.log("Reprovado")
} else {
	console.log("Aprovado")
}

// Tudo certo!
