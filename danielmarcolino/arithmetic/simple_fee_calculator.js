const readline = require('readline-sync');

// Cálculo de Juros Simples – Peça capital, taxa de juros e tempo para calcular o montante final.
const capital = parseFloat(readline.question('Qual o valor a ser investido? '));
const taxFee = parseFloat(readline.question('Qual o valor da taxa de juros? (Já em porcentagem %) '));
const time = parseFloat(readline.question('Quantos meses deseja manter o dinheiro aplicado? '));

const finalAmount = capital * (1 + (taxFee / 100) * time);

console.log(`O valor total ao final do período é: ${finalAmount.toFixed(2)}`);