const prompt = require("prompt-sync")()

const name = prompt("Nome do aluno: ")
const birthYear = Number(prompt("Ano de nascimento: "))
const todayYear = new Date(2024)
const age = todayYear - birthYear

console.log(`Idade: ${age}`)
if (age < 18) {
    console.log(`${name}, você é menor de idade.`)
} else {
    console.log(`${name}, você é maior de idade.`)
}