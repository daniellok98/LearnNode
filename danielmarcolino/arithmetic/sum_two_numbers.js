const readline = require('readline-sync');

// Soma de Dois Números – Peça ao usuário para inserir dois números e exiba a soma deles.
const num1 = parseFloat(readline.question('Digite o primeiro número: '));
const num2 = parseFloat(readline.question('Digite o segundo número: '));
const soma = num1 + num2;
console.log(`A soma dos dois números é: ${soma}`);