const prompt = require("prompt-sync")()

const product = prompt("Produto: ")
const price = Number(prompt("Preço: "))

if (price <= 100) {
    console.log(`O pagamento do ${product} só pode ser feito à vista.`)
} else {
    const installment = price / 3 
    console.log(`Você pode parcelar o ${product} em até 3x de R$ ${installment.toFixed(2)}`)
}