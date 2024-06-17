const prompt = require("prompt-sync")()

const peso = Number(prompt("Digite seu peso: "))
const altura = Number(prompt("Agora sua altura: "))
const imc = peso / (altura * altura)
console.log(`IMC: ${imc.toFixed(1)}`)
if (imc < 18.5) {
	console.log("Abaixo do peso")
} else if (imc < 24.9) {
	console.log("Peso normal")
} else if (imc < 29.9) {
	console.log("Sobrepeso")
} else {
	console.log("Obesidade")
}
