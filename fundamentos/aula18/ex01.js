const prompt = require("prompt-sync")()

const p1 = Number(prompt("Valor do primeiro produto: "))
const p2 = Number(prompt("Valor do segundo produto: "))
const p3 = Number(prompt("Valor do terceiro produto: "))

if (p1 < p2 && p1 < p3) {
    console.log("Você deverá adquirir o primeiro produto.")
} else if (p2 < p1 && p2 < p3) {
    console.log("Você deverá adquirir o segundo produto.")
} else if (p3 < p2 && p3 < p1) {
    console.log("Você deverá adquirir o terceiro produto.")
} else {
    console.log("Algum dos produtos possui valor igual a outro. Verifique e corrija.")
}