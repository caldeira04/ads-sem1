const prompt = require("prompt-sync")()

console.log("Digite seu nome, sexo, altura e diremos seu peso ideal.")

const name = prompt("Digite seu nome: ")
const gender = prompt("Sexo (M/F): ") 
const height = Number(prompt("Altura (em cm): "))
let goodWeight

if (gender == 'F' || gender == 'f') {
    goodWeight = (62.1*(height/100))-44.7
} else {
    goodWeight = (72.7*(height/100))-58
}

console.log(`Peso ideal: ${goodWeight.toFixed(3)}`)