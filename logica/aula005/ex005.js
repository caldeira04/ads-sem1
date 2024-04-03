const prompt = require("prompt-sync")()

const distance = Number(prompt("Distância (em km): "))
const time = Number(prompt("Horário (em h): "))
let kmPrice
let totalPrice

if (time < 0 || time > 24) {
    console.log("Horário inválido.")
} else if (time < 6 || time > 19) {
    kmPrice = 3
    totalPrice = distance*kmPrice
    console.log(`Preço da viagem: ${totalPrice}`)
} else {
    kmPrice = 2
    totalPrice = distance*kmPrice
    console.log(`Preço da viagem: ${totalPrice}`)
}
