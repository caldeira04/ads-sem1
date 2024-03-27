const prompt = require("prompt-sync")()

const product = prompt("Qual o nome do produto desejado? ")

const price = Math.floor((prompt("E qual o preço da prateleira do produto? ")))

const priceModule = (price * 2)

console.log(`Na compra de dois ${product}, pague apenas R$ ${priceModule},00`)