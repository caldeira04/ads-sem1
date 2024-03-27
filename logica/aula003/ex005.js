const prompt = require("prompt-sync")()

const distance = Number(prompt("Distância percorrida em metros: "))
const distanceKilometers = Math.floor(distance / 1000)
const distanceMeters = distance % 1000

console.log(`Equivale a ${distanceKilometers}km e ${distanceMeters}m.`)