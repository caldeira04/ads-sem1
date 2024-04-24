const prompt = require("prompt-sync")()

const x = Number(prompt("Número: "))

if (x >= 5){
    for (let i = 5; i <= x; i = i + 5){
        console.log(i)
    }
} else {
    console.log("Ops... Número deve ser maior ou igual a 5.")
}