const prompt = require("prompt-sync")()

// Declarations
//
let car = [{}]


// Functions
//
function listings() {
	for (let i = 0; i < car.length; i++) {
		console.log(`Make.....: ${car[i].make}`)
		console.log(`Model....: ${car[i].model}`)
		console.log(`Year.....: ${car[i].year}`)
		console.log(`Price: R$: ${car[i].price}`)
		console.log(`-`.repeat(30))
	}
}

function add() {
	console.log("Add info about the new car.")
	const w = prompt("Car Make....: ")
	const x = prompt("Car Model...: ")
	const y = Number(prompt("Car Year....: "))
	const z = Number(prompt("Car Price...: "))

	car.push({
		make: w,
		model: x,
		year: y,
		price: z
	})
}

// Main code
//
let code = true
do {
	console.log("-".repeat(30))
	console.log("Welcome to the car sale")
	console.log("-".repeat(30))
	console.log("1. Mostrar carros")
	console.log("2. Adicionar carros")
	console.log("3. Remover carros")
	console.log("4. Alterar propriedades de um carro")
	console.log("0. Sair do programa")
	const option = Number(prompt("Digite uma opcao (ou 0 para encerrar) "))

	if (option === 0) {
		code = false
		console.log("Programa encerrado.")
	} else if (option === 1) {
		listings()
	} else if (option === 2) {
		add()
	} else if (option === 3) {
		remove()
	} else if (option === 4) {
		change()
	}

} while (code === true)
