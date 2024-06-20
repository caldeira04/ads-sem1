const prompt = require("prompt-sync")()

const num1 = Number(prompt("Numero 1: "))
const num2 = Number(prompt("Numero 2: "))
const num3 = Number(prompt("Numero 3: "))

const media = (num1 + num2 + num3) / 3

console.log(`Media: ${media}`)

// Tudo certo!
