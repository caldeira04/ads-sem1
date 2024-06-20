const prompt = require("prompt-sync")()

const idade = Number(prompt("Digite sua idade: "))

if (idade >= 5 && idade <= 7) {
	console.log("Infantil 1")
} else if (idade >= 8 && idade <= 10) {
	console.log("Infantil 2")
} else if (idade >= 11 && idade <= 13) {
	console.log("Juvenil 1")
} else if (idade >= 14 && idade <= 17) {
	console.log("Juvenil 2")
} else if (idade >= 18) {
	console.log("Adulto")
} else {
	console.log("Idade insuficiente")
}

// Tudo certo!
