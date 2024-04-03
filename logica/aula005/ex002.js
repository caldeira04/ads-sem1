const prompt = require("prompt-sync")()

const num = Number(prompt("Digite um número: "))
let sqRoot = Math.sqrt(num)

if (Number.isInteger(sqRoot)) {
    console.log(`A raiz quadrada de ${num} é ${sqRoot}`)
} else {
    console.log(`${num} não possui raiz exata`)
}