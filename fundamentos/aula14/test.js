const prompt = require("prompt-sync")();

const nome = prompt("Qual seu nome?")
const idade = Number(prompt("E sua idade?"))
const preten = Number(prompt("E qual sua pretensão salarial?"))

if (idade >= 20 && idade <= 30 && preten >= 2000 && preten <= 3000) {
	console.log(`${nome}, você foi selecionado!`)
} else {
	console.log(`${nome}, procure outra vaga.`)
}

