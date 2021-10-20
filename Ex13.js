/* Faça um algoritmo que receba uma matriz[i,z] como parâmetro e imprima todos os 
valores dessa matriz. */

const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];

matriz.forEach(linha => {
    linha.forEach(coluna => {
        console.log(coluna);
    });
});