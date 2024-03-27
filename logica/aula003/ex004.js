const prompt = require("prompt-sync")()

const amount = prompt("Quantidade de ovos: ")
const dozens = Math.floor(amount / 12)
const rest = amount % 12

console.log(`Quantidade de dúzias: ${dozens}`)
console.log(`Sobra: ${rest}`)