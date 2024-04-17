const prompt = require("prompt-sync")()

const x = Number(prompt("Número: "))

if (x >= 5){
    for (let i = 5; i <= Math.floor(x/5); i + 5){
        console.log(Math.floor(x/5) * i)
    }
} else {
    console.log("Ops... Número deve ser maior ou igual a 5.")
}