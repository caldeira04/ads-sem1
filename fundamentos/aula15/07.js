const prompt = require("prompt-sync")()

const nota1 = Number(prompt("Digite nota 1: "))
const nota2 = Number(prompt("Digite nota 2: "))
const nota3 = Number(prompt("Digite nota 3: "))
const nota4 = Number(prompt("Digite nota 4: "))

const media = (nota1 + (nota2 * 2) + (nota3 * 3) + nota4) / 7
let conceito
console.log(`Media: ${media}`)


if (media <= 10 && media >= 9) {
	conceito = "A"
} else if (media < 9 && media >= 8) {
	conceito = "B"
} else if (media < 8 && media >= 6) {
	conceito = "C"
} else if (media < 6 && media >= 4) {
	conceito = "E"
}

console.log(`Conceito: ${conceito}`)

if (conceito == "A" || conceito == "B" || conceito == "C") {
	console.log("Aprovado")
} else {
	console.log("Reprovado")
}

// Tudo certo!
