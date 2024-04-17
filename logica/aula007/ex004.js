const prompt = require("prompt-sync")()

let num = Number(prompt("Número: "))
console.log("Contagem Regressiva")

for (let i = num; i > 0; i--){
    console.log(num--)
}

console.log("Fogo!")