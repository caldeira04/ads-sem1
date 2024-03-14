const prompt = require("prompt-sync")();

console.log(`Digite o valor do carro e faremos uma simulação fixa de financiamento.`)
const value = Number(prompt("Qual o valor do carro? "));
const half = value / 2;
const installment = half / 12;
const i = installment.toFixed(2);

console.log(`Esse carro pode ser financiado com uma entrada de ${half} e 12 parcelas de ${i} sem juros.`)