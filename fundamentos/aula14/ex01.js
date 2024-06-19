const prompt = require("prompt-sync")()

const name = prompt("Qual seu nome?")
const year = Number(prompt("E seu ano de nascimento?"))
const workYear = Number(prompt("E que ano você começou a trabalhar?"))
const age = 2024 - year
const workTime = 2024 - workYear

console.log(`Idade: ${age};`)
console.log(`Tempo de serviço: ${workTime}`)
if ((age >= 60 || workTime >= 25) || age >= 55 && workTime >= 20) {

	console.log(`${name}, você pode requerer aposentadoria.`)
} else {
	console.log(`${name}, você não pode requerer apostentadoria.`)
}
