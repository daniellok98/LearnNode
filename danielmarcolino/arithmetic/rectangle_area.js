const readline = require('readline-sync');

// Cálculo de Área de um Retângulo – Solicite a base e a altura de um retângulo e calcule sua área.
const base = parseFloat(readline.question('Digite a base do retângulo: '));
const altura = parseFloat(readline.question('Digite a altura do retângulo: '));

if ((base<0) || (altura<0)) {
    console.log('Por favor, insira valores numéricos válidos. Não existem dimensões negativas em um retângulo.');
} else {
    const area = base * altura;
    console.log(`A área do retângulo é: ${area}`);
}