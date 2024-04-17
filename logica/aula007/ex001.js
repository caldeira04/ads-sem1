const prompt = require("prompt-sync")()

const product = prompt("Produto: ")
const price = prompt("Preço: R$ ")

console.log("Opções de Pagamento")
console.log("-------------------")

for (let i = 1; i <= 10; i++){
    console.log(`${i}x de ${(price/i).toFixed(2)}`)
}