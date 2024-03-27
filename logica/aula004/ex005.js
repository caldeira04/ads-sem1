const prompt = require("prompt-sync")()

console.log("Hoje temos apenas notas de R$ 10 disponíveis para saque")
const saque = Number(prompt("Valor do saque: "))

if ((saque % 10) == 0){
    console.log(`*Você saca ${saque/10} notas de 10 reais.*`)
} else {
    console.log(`Não é possível sacar R$ ${saque.toFixed(2)} com notas de 10 reais.`)
}