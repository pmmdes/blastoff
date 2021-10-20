//Faça um algoritmo que receba um número e retorne se o número é primo ou não. 

const numero = 10;

function ehPrimo(numero) {
    for (let i = 2; i <= (numero/2); i++) {
        if (numero % i == 0) {
           return 0;
        }
    }
    return 1;
}

ehPrimo(numero) == 0 ? console.log("Não é primo") : console.log("É primo");