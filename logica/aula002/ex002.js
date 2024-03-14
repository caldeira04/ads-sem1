const prompt = require("prompt-sync")();

const conta = Number(prompt("Quanto foi o jantar? "));
const taxa = conta * 0.10;
const total = conta + taxa;

console.log(`O valor com taxa do garçom foi ${total}. Débito ou crédito?`)