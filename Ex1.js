//Dada as idades I, J, K, X, Y. Faça um algoritmo para calcular a média das idades.
const I = 10;
const J = 20;
const K = 30;
const X = 40;
const Y = 50;

const idades = [ I, J, K, X, Y];

let soma = 0;

for(let i=0; i < idades.length; i++){
    soma += idades[i];
}

console.log(`Média das idades: ${soma/idades.length}` );