const readline = require('readline-sync');

// Conversão de Temperatura - Peça ao usuário uma temperatura em Fahrenheit e converta para Celsius
const fahrenheit = readline.questionFloat('Temperatura em Fahrenheit (Fº): ');
const celsius = (fahrenheit - 32) * 5 / 9;

if (celsius < 0) {
    console.log('Uuuuugh que frio. ' + celsius.toFixed(2) + ' ºC é congelante!');
} 
else if (celsius > 0 && celsius < 100) {
    console.log(`Temperatura em Celsius: ${celsius.toFixed(2)}`);
} 
else {
    console.log('Nossa que calor. ' + celsius.toFixed(2) + ' ºC é quente demais!');
}
