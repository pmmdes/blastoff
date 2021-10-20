/* Dada uma lista de números A[1,2,3,...], faça um algoritmo que retorne uma lista somente 
com os números pares. */

const A = [1, 3, 14, 5, 7, 8, 10, 12];
var B = [];

A.forEach(element => {
    if(element%2 == 0) {
        B.push(element);
    } 
});

console.log(B);