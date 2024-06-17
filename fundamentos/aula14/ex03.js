const prompt = require("prompt-sync")()

const nota = Number(prompt("Digite a nota do aluno: "))
let conceito

if (nota >= 90) {
	conceito = "A"
} else if (nota >= 80) {
	conceito = "B"
} else if (nota >= 70) {
	conceito = "C"
} else if (nota >= 60) {
	conceito = "D"
} else {
	conceito = "F"
}

console.log(`Conceito: ${conceito}`)
