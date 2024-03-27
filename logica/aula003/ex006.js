const prompt = require("prompt-sync")()

const destination = prompt("Destino: ")
const days = Number(prompt("Numero de dias: "))
const hours = Number(prompt("Numero de horas: "))
const totalHours = (days * 24) + hours

console.log(`A viagem para ${destination} dura ${totalHours} horas`)