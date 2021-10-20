/* Uma partida de futebol iniciou na hora A e terminou na hora B. Faça um algoritmo que 
calcule o tempo que durou a partida */

const A = "19h15";
const B = "20h10";

const splitedA = A.split("h");
const splitedB = B.split("h");

const horas = Math.abs(splitedB[0] - splitedA[0]); 
const minutos = Math.abs(splitedB[1] - splitedA[1]);

console.log("Tempo gasto: " 
            + horas.toString().padStart(2, "0") 
            + "h" 
            + minutos);