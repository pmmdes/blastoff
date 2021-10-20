/* Faça um algoritmo que recebe uma palavra e retorne se a palavra é palíndromo.  */

function verificaPalindromo(palavra) {

    //Tratando palavra para não haver problemas com camel case
    palavra = palavra.toLowerCase();
    
    const arrPalavra = palavra.split('');
    const arrPalavraInversa = palavra.split('').reverse();

    for(let i=0; i < arrPalavra.length ; i++){
        if(arrPalavra[i] != arrPalavraInversa[i]) {return 0;}
    }

    return 1;
}

const palavra = "osso";

if(verificaPalindromo(palavra) === 1) {
    console.log("É palíndromo.");
} else {
    console.log("Não é palíndromo.");
}
