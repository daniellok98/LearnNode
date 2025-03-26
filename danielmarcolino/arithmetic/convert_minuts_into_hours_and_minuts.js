const readline = require('readline-sync');

// Conversão de Minutos para Horas e Minutos – Peça um valor em minutos e converta para horas e minutos.
function mintohourmin(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    const hourLabel = hours === 1 ? 'hora' : 'horas';
    const minuteLabel = remainingMinutes === 1 ? 'minuto' : 'minutos';
    return `${hours} ${hourLabel} e ${remainingMinutes} ${minuteLabel}`;
}
const minutes = readline.questionInt('Quantos minutos? ');
console.log('É equivalente a '+ mintohourmin(minutes));
