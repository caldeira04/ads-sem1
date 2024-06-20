const prompt = require("prompt-sync")()

const gamma = Number(prompt("Digite o indice de radiacao atual: "))

if (gamma >= 0.6) {
	console.log("As empresas 1, 2 e 3 devem paralisar IMEDIATAMENTE!")
} else if (gamma >= 0.45) {
	console.log("As empresas 1 e 2 devem paralisar IMEDIATAMENTE")
} else if (gamma >= 0.35) {
	console.log("A empresa 1 deve paralisar IMEDIATAMENTE")
} else {
	console.log("O indice esta no nivel adequado, nao ha necessidade de paralisacao.")
}

// Tudo certo!
