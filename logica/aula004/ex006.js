const prompt = require("prompt-sync")()

const num = Number(prompt("Número: "))

if ((num % 2) == 0) {
    console.log(`O número já é par. O próximo par é ${num+2}`)
} else {
    console.log(`O próximo par é ${num+1}`)
}