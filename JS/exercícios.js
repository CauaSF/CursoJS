//SOLICITE 3 NÚMEROS PARA O USUÁRIO E INFORME SE O NÚMERO SOLICITADO É PAR OU ÍMPAR
const readline = require('readline-sync');

let soma = 0;

while(soma < 100) {
    let numero = readline.questionInt("Informe um numero para adicionar a soma: ");
    soma = soma / 5, soma != 5;
    console.log("soma: ", soma);
}
// Solicite um número para o usuário, enquanto esse número for múltiplo de 5, continue pedindo outro número. Informem o que o número é múltiplo de 5.
