// Declarations
//
//
const prompt = require("prompt-sync")()
const fs = require("fs")
let running = true
let courts = [{}]
let chosen

// Functions
//
//
function loadCourts() {
	const data = fs.readFileSync('horarios.txt', 'utf8')
	if (data) {
		courts = JSON.parse(data)
	}
}

function add() {
	let x, y, z
	x = prompt("A quadra é de pádel ou beach? ")
	y = prompt("Qual horário foi disponibilizado? ")
	z = prompt("Qual o número da quadra? ")

	courts.push({
		sport: x,
		time: y,
		num: z
	})
	console.log("\nHorário adicionado ao catálogo.\n")
}

function list() {
	console.log("Mostrando horários para permanente disponíveis no clube: \n")
	for (let i = 1; i < courts.length; i++) {
		console.log(`Esporte: ${courts[i].sport}, Horário: ${courts[i].time}, Quadra: ${courts[i].num}`)
	}
	console.log("-".repeat(40))
}

function search() {
	const criteria = prompt("Use um termo de pesquisa (esporte, horário ou número da quadra) ")
	console.log(`Mostrando resultados da busca por ${criteria}:\n`)
	let found = false;
	for (let i = 0; i < courts.length; i++) {
		if (courts[i].sport === criteria || courts[i].time === criteria || courts[i].num === criteria) {
			console.log(`Esporte: ${courts[i].sport}, Horário: ${courts[i].time}, Quadra: ${courts[i].num}`)
			found = true
		}
	}
	if (!found) {
		console.log("Não foram encontrados horários com a pesquisa utilizada.")
	}
	console.log("-".repeat(40))
}

function searchFilter() {
	let criteria
	let found = false
	console.log("Escolha uma opção:")
	console.log("1. Pesquisar por esporte")
	console.log("2. Pesquisar por horário")
	console.log("3. Pesquisar por número da quadra")
	const filter = prompt("Escolha uma opção para pesquisar ")
	for (let i = 0; i < courts.length; i++) {
		if (filter === 1) {


		} else if (filter === 2) {

		} else if (filter === 3) {

		}
	}
}

loadCourts()

// Main code
//
//


do {
	console.log("-".repeat(40))
	console.log("Bem vindo a administração de horários fixos do clube")
	console.log("O que deseja fazer?")
	console.log("-".repeat(40))
	console.log("1. Disponibilizar horário")
	console.log("2. Mostrar horários")
	console.log("3. Pesquisar horário")
	console.log("4. Pesquisa avançada de horário")
	console.log("5. Alterar horário")
	console.log("6. Indisponibilizar horário")
	console.log("7. Encerrar programa")

	chosen = Number(prompt("Digite sua escolha: "))
	if (chosen == 1) {
		add()
	} else if (chosen == 2) {
		list()
	} else if (chosen == 3) {
		search()
	} else if (chosen == 4) {
		searchFilter()
	} else if (chosen == 5) {
		change()
	} else if (chosen == 6) {
		remove()
	} else if (chosen == 7) {
		console.log("Certo. Programa encerrado!")
		console.log("-".repeat(40))
		fs.writeFileSync('horarios.txt', JSON.stringify(courts), (err) => {
			if (err) {
				console.error("Ocorreu um erro ao salvar o arquivo:".err)
			} else {
				console.log("Arquivo com os horários criado com sucesso.")
			}
		})
		running = false
	}

} while (running === true)
