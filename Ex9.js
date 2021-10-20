//Faça um algoritmo que receba um número e retorne a tabuada desse número

function calculaTabuada(n) {
    for(let i=1;i<=10;i++){
        console.log(`${n} x ${i} = ` + n*i);
    }
}

calculaTabuada(5);