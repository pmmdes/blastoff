//Faça um algoritmo que receba um número e retorne o Fatorial desse número.

function fatorial(n) {
    let multi = 1;

    for(let i=n; i>0; i--){
        multi *= i; 
    }

    return multi;
}

console.log(fatorial(5));