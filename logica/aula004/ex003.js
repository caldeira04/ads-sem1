const prompt = require("prompt-sync")()

const make = prompt("Marca: ")
const price = Number(prompt("Preço: R$ "))
let discount
let finalPrice

if (make == "Fiat") {
    discount = 0.10 * price
    finalPrice = price - discount
    console.log(`Desconto: R$ ${discount.toFixed(2)}`)
    console.log(`Preço à vista: R$ ${finalPrice.toFixed(2)}`)
    
} else {
    discount = 0.20 * price
    finalPrice = price - discount
    console.log(`Desconto: R$ ${discount.toFixed(2)}`)
    console.log(`Preço à vista: R$ ${finalPrice.toFixed(2)}`)
}
