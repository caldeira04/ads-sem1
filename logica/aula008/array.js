const prompt = require("prompt-sync")()
let amigos = []

console.log("Digite o nome de 5 amigos: ")

for (let i = 1; i <= 5; i++) {
    const nome = prompt(`${i} amigo: `)
    amigos.push(nome)
}

for (let i = 0; i < 5; i++) {
    console.log(`Amigo ${i+1}: ${amigos[i]}`)
}