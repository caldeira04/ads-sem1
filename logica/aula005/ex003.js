const prompt = require("prompt-sync")()

let l1 = Number(prompt("Lado A: "))
let l2 = Number(prompt("Lado B: "))
let l3 = Number(prompt("Lado C: "))


if (l1 > (l2 + l3) || l2 > (l1 + l3) || l3 > (l1 + l2)) {
    console.log("Não é triângulo.")
} else {
    console.log("É triângulo")
    if (l1 == l2 && l1 == l3) {
        console.log("Tipo: equilátero")
    } else if (l1 == l2 && l1 != l3 || l2 == l3 && l2 != l1 || l3 == l1 && l3 != l2) {
        console.log("Tipo: isósceles")
        
    } else {
        console.log("Tipo: escaleno")
    }
}