const readline = require('readline-sync');

// Verificação de Par ou Ímpar – Solicite um número e informe se ele é par ou ímpar.

const number = readline.questionInt('Digite um numero: ');

if (number % 2 === 0) {
    console.log(number+' é par.');
} else {
    console.log(number+' é ímpar.');
}