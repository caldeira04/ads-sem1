const prompt = require("prompt-sync")();

const nota1 = Number(prompt("Digite a primeira nota do aluno: "));
const nota2 = Number(prompt("Digite a segunda nota do aluno: "));
const media = (nota1 + nota2) / 2;

console.log(`A média do aluno foi ${media}, com ${nota1} na primeira prova e ${nota2} na segunda.`);