// // var atual =2024;
// // var nascimento=2008;

// // console.log(atual - nascimento);

// // soma +
// // subtração -
// // multiplicação *
// // divisão /
// //resto % 
// //exponenciação **
// // incremento por 1
// // decremento por 1










// // const nome = "Cauã";
// // const sobrenome = 'Santos';
// // const texto = `Colocar o texto`;
// // const nomeCompleto = nome + ' ' + sobrenome
// // const idade = 16
// // const frase = "O nome da pessoa é: " + nomeCompleto + ". E sua idade é de " + idade + " anos"
// // const frase2 = `O nome da pessoa é ${nomeCompleto}. E sua idade é ${idade} anos`;

// // console.log(frase2)

// // node index.js

// // cls - clear screen, só é valido no windows -CMD/Powershell
// // clear - # Linux / MacOS - Bash
// //console.log() serve para chamar as funções 

// // Nunca iniciar o nome com um número | var 1nome; (errado)
// // Nunca acentuar a variávei | var profissão; (errado) | correto: var profissao;
// // O único caracter especial aceito é o underline/underscore _ | var _nome; | var nome_profissao;
// // Nunca separar por espaço, utilizar o underlin/underscore | 
// // errado: var primeiro nome;  | correto: var primeiro_nome;
// // snake_case: separados por underline/underscore.
// // PascalCase: palavras iniciadas em letras maiúsculas.
// // camelCase: palavras separadas iniciadas em letras maiúsculas.
// // const nome = 'Joao';
// // console.log("Para juntar" + " dois textos e uma variavel: " + nome );
// // console.log(`Para juntar dois textos e uma variavel: ${nome}`);
// // console.log("Para juntar dois textos e uma variavel: %s", nome);

// //    %s   --- string
// //    %d   --- digit
// //    %o   --- object
// // let tabuada = 8
// // console.log("8x1=" + tabuada*1);
// // console.log("8x2="+tabuada*2);
// // console.log("8x3="+tabuada*3);
// // console.log("8x4="+tabuada*4);
// // console.log("8x5="+tabuada*5);
// // console.log("8x6="+tabuada*6);
// // console.log("8x7="+tabuada*7);
// // console.log("8x8="+tabuada*8);
// // console.log("8x9="+tabuada*9);
// // console.log("8x10="+tabuada*10);



// // npm install readline-sync
// // const readline = require("readline-sync");

// // const nome = readline.question("Qual o seu nome? ");
// // const notas1 = readline.questionFloat("Qual a sua nota do 1 bimestre? ");
// // const notas2 = readline.questionFloat("Qual a sua nota do 2 bimestre? ");
// // const notas3 = readline.questionFloat("Qual a sua nota do 3 bimestre? ");
// // const notas4 = readline.questionFloat("Qual a sua nota do 4 bimestre? ");

// // readline.que

// // console.log(`O nome informado foi: ${nome}, nota do 1 bimestre informada foi de ${notas1}, nota do 2 bimestre informada foi de ${notas2}, nota do 3 bimestre informada foi de ${notas3}, nota do 4 bimestre informada foi de ${notas4} `);
// // console.log((notas1+notas2+notas3+notas4)/4);



// /**
//  * SOLICITE O NOME DO ALUNO(A) E SUAS 4 NOTAS BIMESTRAIS E CALCULE A MÉDIA FINAL
// //



// // const jogo = readline.question( "Qual melhor jogo? V -Valorant ou C - Call of Duty"); 
// // if ( jogo.toUpperCase() == "V") {
// //     console.log ("tambem gosto");
// // }
// // else if (jogo.toUpperCase() == "C") {
// //     console.log(" Não gosto e não jogo");
// // }
// // else {
// //     console.log("Opa...Opção desconhecida");
// // }


// /**
//  *    ==    - Operador lógico de comparação
//  *    >     - Operador lógico maior que
//  *    >=    - Operador lógico maior ou igual à
//  *    <     - Operador lógico menor que
//  *    <=    - Operador lógico menor ou igual à
//  *    !=    - Operador lógico diferente de
//  * 
//  *   condição operador valor
//  *   sexo == "M"
//  *   idade >= 18
//  *   senha == novaSenha
//  */
// // const readline = require("readline-sync");

// // const nome = readline.question("Qual seu nome?"); 

// // let nota1 = readline.questionFloat( "Qual foi sua nota no 1 bimestre?");
// // let nota2 = readline.questionFloat( "Qual foi sua nota no 2 bimestre?");
// // let nota3 = readline.questionFloat( "Qual foi sua nota no 3 bimestre?");
// // let nota4 = readline.questionFloat( "Qual foi sua nota no 4 bimestre?");


// // const media = (nota1 + nota2 + nota3 + nota4) / 4;

// // if (media >= 6) {
// //     console.log(`O(A) aluno(a) ${nome} foi aprovado(a) e a média foi de ${media}`);
// // } else {
// //     console.log(`O(A) aluno(a)  ${nome} foi reprovado(a) e a média foi de ${media}`);
// // }


// // const readline = require("readline-sync");

// // const idade = readline.questionInt(" Qual sua idade? \n");
// // const sexo = readline.question("Qual seu sexo? M-masculino ou F-feminino \n"); 


// // if (idade >= 18) {
// //     if (sexo.toUpperCase() == 'M') {
// //         console.log("Bem-vindo ao exército brasileiro");
// //     } else if (sexo.toUpperCase() == 'F') {
// //         const resposta = readline.question("Desejar se alistar ao exército? S - SIM | N - Nao\n");
// //         if (resposta.toUpperCase() == 'S') {
// //             console.log("Bem-vindo ao exército brasileiro");
// //         } else {
// //             console.log("Obrigado.");
// //         }
// //     }
// // } else {
// //     console.log("Voce ainda e menor de idade. ");
// // }







// // Laços de Repetição
// // // FOR --- Para
// // // for(let i = 0; i <= 5; i++) {
// // //     console.log(i);
// // // }

// // // SEI QUANTAS VEZES QUERO EXECUTAR?
// // // SIM - UTILIZAR FOR
// // // NÃO - UTILIZAR WHILE

// // // WHILE --- Enquanto
// // // let i = 10;
// // // while(i < 5) {
// // //     console.log(i);
// // //     i++;
// // // }
// // // console.log('Fim do While');
// // // DO WHILE -- Faça enquanto
// // let i = 10;
// // do {
// //     console.log(i);
// //     i++;
// // } while(i < 5);
// // console.log('Fim do While');





// const readline = require('readline-sync');

// let valor = 0;
// // UAI Ô = Pronúncia da palavra WHILE
// while(valor % 5 == 0) {
//     valor = readline.questionInt("Informe um numero multiplo de 5: ");
// }
