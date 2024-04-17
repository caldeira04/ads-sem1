const prompt = require("prompt-sync")()

const num1 = Number(prompt("Numero 1: "))
const num2 = Number(prompt("Numero 2: "))
console.log(`Entre ${num1} e ${num2}`)

for (let i = 0; i <= (num2 - num1); i++) {
    console.log(num1 + i)
}