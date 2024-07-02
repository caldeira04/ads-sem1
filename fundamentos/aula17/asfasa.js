const prompt = require("prompt-sync")()

const clienteNovo = prompt("É um novo cliente? (S/N) ")
const cupom = prompt("Possui cupom? (S/N) ")

if (clienteNovo == "s" && cupom == "s" || clienteNovo != "s") {
    console.log("Desconto garantido. Vem que tem!")
} else {
    console.log("Chora, trouxa!")
}