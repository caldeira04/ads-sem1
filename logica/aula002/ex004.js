const prompt = require("prompt-sync")();

const name = prompt("Digite o nome do aluno: ");
const age = Number(prompt("Quantos anos tem esse aluno? "));
const birthYear = 2024 - age;

console.log(`Se ${name} já fez aniversário, ele nasceu em ${birthYear}. Se ainda não fez aniversáio, ele nasceu em ${birthYear-1}`)