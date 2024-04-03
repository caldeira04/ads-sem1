const prompt = require("prompt-sync")()

const fans = Number(prompt("Número de torcedores: "))
let busesNeeded = Math.ceil(fans/40)
let remainingSeats = Math.abs((fans % 40) - 40)


console.log(`Número de ônibus: ${busesNeeded}`)
console.log(`Lugares disponíveis: ${remainingSeats}`)