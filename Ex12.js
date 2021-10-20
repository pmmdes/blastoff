/* Dada duas lista de números A[1,2,3,4] e B[1,2,5,8], faça um algoritmo que retorne a 
concatenação das listas. */

const A = [1,2,3,4];
const B = [1,2,5,8];

B.forEach(element => {
    A.push(element);
});

console.log(A.sort());