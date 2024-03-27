const prompt = require("prompt-sync")()

const value = 5
const enterTime = prompt("Qual a hora de entrada? ")
const exitTime = prompt("Qual a hora de saída? ")
const toPay = Math.ceil(exitTime - enterTime)
const toEarn = toPay * value

console.log(`Tempo cobrado: ${toPay} horas`)
console.log(`Valor a pagar: R$ ${toEarn},00`)