const prompt = require("prompt-sync")()

const num1 = Number(prompt("Digite um número: "))
const num2 = Number(prompt("Digite outro número: "))
const num3 = Number(prompt("Digite mais um número: "))

if (num1 > num2 && num2 > num3) {
	console.log(num1 + num2)
} else if (num2 > num1 && num3 > num1) {
	console.log(num2 + num3)
} else if (num3 > num2 && num1 > num2) {
	console.log(num1 + num3)
}
