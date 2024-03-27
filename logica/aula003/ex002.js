const prompt = require("prompt-sync")()

const movie = prompt("Dê o nome de um filme: ")
const timer = prompt("Dê a duração do filme em minutos: ")
const timerHours = Math.floor(timer / 60)
const timerMinutes = timer % 60

console.log(`O filme ${movie} tem ${timerHours} horas e ${timerMinutes} minutos de duração.`)