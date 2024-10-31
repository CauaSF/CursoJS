

// const readline = require('readline-sync');


//1.
// let soma = 0;

// while (soma < 100) {
//     let numero = readline.questionInt("Informe um numero: ");
//     soma += numero; 

//     if (numero % 2 === 0) {
//         console.log("O número: " + numero + " é par");
//     } else { 
//         console.log("O número: " + numero + " é ímpar");
//     }
// }








// //2.
// for (let i = 1; i <= 20; i++) {
//     console.log(i);
// }









//3.
// const readline = require('readline-sync');

// let nota1 = readline.questionInt("Qual foi sua nota no 1º bimestre? ");
// let nota2 = readline.questionInt("Qual foi sua nota no 2º bimestre? ");
// let nota3 = readline.questionInt("Qual foi sua nota no 3º bimestre? ");
// let nota4 = readline.questionInt("Qual foi sua nota no 4º bimestre? ");


// const media = (nota1 + nota2 + nota3 + nota4) / 4;
// console.log("A média é: " + media);








// //4.
// const readline = require('readline-sync');

// function DOBRO(numero) {
//     return numero * 2;
// }

// let numero = readline.questionFloat("Digite um numero: ");
// console.log("O dobro é: " + DOBRO(numero));









// //5.
// const readline = require('readline-sync')
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i);
//     }
// }
 







//6.

//  const readline = require('readline-sync');

// let numero1 = readline.questionFloat("Digite o primeiro numero: ");
// let numero2 = readline.questionFloat("Digite o segundo numero: ");

// let num; 
// if (numero1 > numero2) {
//     num = numero1; 
// } else {
//     num = numero2; 
// }

// console.log("O maior número é: " + num);










// 7.
// const readline = require('readline-sync');


// let nota1 = readline.questionInt("fale um numero:  ");
// let nota2 = readline.questionInt("fale um numero:  ");
// let nota3 = readline.questionInt("fale um numero:  ");
// let nota4 = readline.questionInt("fale um numero:  ");
//  let soma =  nota1 + nota2 + nota3 + nota4;
//  console.log (" a soma deles é:" +  soma);

//  let maior;
//  if (nota1 > nota2) {
//     maior= nota1;
//  } else {
//     maior= nota2;
//  }

//  let menor ;
//  if ( nota3 > nota4) {
//     menor= nota3;
//  } else {
//     menor= nota4;
//  }
// let final
//  if ( maior > menor ) {
//     final = maior;
//  } else {
//     final = menor;
//  }
//  console.log ("O maior numero entre eles é: " + final);



//  let media =( nota1 + nota2 + nota3 + nota4) / 4;
//  console.log( "A média desses numeros é: " + media);
 







// //8.
// const readline = require('readline-sync')

// const inicio = 1
// const fim = 100

// let soma = 0
// for ( let i = inicio ; i <= fim ; i++){
// soma += i; 
// }
// console.log(`A soma dos números de ${inicio} à ${fim} é ${soma}`)






// //9.
// const readline = require('readline-sync');

// function ehPrimo(numero) {
//     for (let i = 2; i < numero; i++) {
//         if (numero % i == 0) {
//             return false;
//         }
//     }

//     return true;
// }

// const num = readline.questionInt("Informe um numero: ");

// if (ehPrimo(num)) {
//     console.log(`O número ${num} é um número primo.`);
// } else {
//     console.log(`O número ${num} não é um número primo.`);
// }










//10.

