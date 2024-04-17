const prompt = require("prompt-sync")()

const num = Number(prompt("Número: "))
console.log(`Seguintes ao ${num}`)

for (let i = 1; i <= 10; i++){
    console.log(num + i)
}