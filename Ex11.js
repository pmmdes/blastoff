/* Dada duas lista de números A[1,2,3,4] e B[1,2,5,8], faça um algoritmo que retorne a 
intersecção das listas */

const A = [1,2,3,4];
const B = [1,2,5,8];
let C = [];

for(let i=0; i<A.length; i++) {
    for(let j=0; j<B.length; j++) {
        //se houve interseccao
        if(A[i] == B[j]) {
            //verifica se o elemento nao existe no array de interseccao C
            if(C.indexOf(A[i]) == -1 ) {
                C.push(A[i]);
            }
            break;
        }
    }
}

console.log(C);