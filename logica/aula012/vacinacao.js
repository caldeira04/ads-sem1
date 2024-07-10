const prompt = require("prompt-sync")()

let criancas = 0
let gotas = 0
let continua = "S"

console.log("Campanha de vacinação")
console.log("-".repeat(30))
while (continua == "S") {
	const nome = prompt("Criança: ")
	gotas = gotas + Number(prompt("Nº de gotas:"))
	console.log(`${nome} vacinado (a) com ${gotas} gotas.`)
	criancas++
	continua = prompt("Continua? ").toUpperCase()
}

console.log("-".repeat(30))
console.log(`Crianças vacinadas: ${criancas}`)
console.log(`Total de gotas: ${gotas}`)
console.log(`Frascos de vacina usados: ${Math.ceil(gotas / 30)}`)
