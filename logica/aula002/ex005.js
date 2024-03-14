const prompt = require("prompt-sync")();

const number = Number(prompt("Digite um número: "));

console.log(`O antecessor do seu número é ${number-1}, o sucessor é ${number+1}`)