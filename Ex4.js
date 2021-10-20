//Faça um algoritmo que converta a temperatura de C para F.

function celsiusToFh(c) {

    const f = ((9/5)*c + 32).toFixed(2); 

    return f;
}

console.log(celsiusToFh(30.5));