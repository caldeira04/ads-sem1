const prompt = require("prompt-sync")()

const brazilTime = Number(prompt("Hora no Brasil: "))
let franceTime = brazilTime + 5

if (franceTime >= 24){
    franceTime = franceTime % 24
    console.log(`Hora na França: ${franceTime}`)
} else {
    console.log(`Hora na França: ${franceTime}`)
}