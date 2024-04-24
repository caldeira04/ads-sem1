const prompt = require("prompt-sync")()

let num1 = Number(prompt("Numero 1: "))
let num2 = Number(prompt("Numero 2: "))
console.log(`Entre ${num1} e ${num2}`)

if (num2 > num1) {
    console.log("Combinação inválida")
} else {
    for (let i = num1; i <= num2; i++) {
        console.log(num1++)
    }
} 