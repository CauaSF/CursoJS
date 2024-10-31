// npm install readline-sync





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






// //SOLICITE 3 NÚMEROS PARA O USUÁRIO E INFORME SE O NÚMERO SOLICITADO É PAR OU ÍMPAR
// const readline = require('readline-sync');

// let soma = 0;

// while(soma < 100) {
//     let numero = readline.questionInt("Informe um numero para adicionar a soma: ");
//     soma = soma / 5, soma != 5;
//     console.log("soma: ", soma);
// }
// // Solicite um número para o usuário, enquanto esse número for múltiplo de 5, continue pedindo outro número. Informem o que o número é múltiplo de 5.










// let frutas = ["maçã", "banana", "laranja"];
// frutas.push("uva");
// frutas.unshift("melão");
// console.log(frutas, frutas.length);
// console.log(frutas.indexOf("laranja"));
// console.log(frutas[3]);
// // Length - Tamanho / Quantidade de elementos
// // Push - Incluir no fim do Array
// // Unshift - Incluir no começo do Array
// // Pop - Remove o último elemento do Array
// // Shift - Remove o primeiro elemento do Array
// // indexOf - Localizar a posição/indice do elemento no Array

// const numeros = [1, 2, 3, 4, 5];

// // Dobrar cada número
// // Arrow Functions  
// const numerosDobrados = numeros.map(numero => numero * 2);

// // Funções Naturais
// const numerosDobradosNaturais = numeros.map(function (numero) {
//     return numero * 2;
// });

// const readline = require("readline-sync");

// const notas = [];
// for (let i = 0; i < 4; i++) {
//     let nota = readline.questionFloat(`Qual a nota ${i}: `);
//     notas.push(nota);
// }
// console.log(notas);
// let soma = 0;
// for (let i = 0; i < notas.length; i++) {
//     soma = soma + notas[i];
// }
// console.log(soma);





// const notas = [];
// for (let i = 0; i < 4; i++) {
//     let nota = readline.questionFloat(`Qual a nota ${i}: `);
//     notas.push(nota);
// }
// console.log(notas);
// let soma = 0;
// for (let i = 0; i < notas.length; i++) {
//     soma = soma + notas[i];
// }
// console.log(soma);
// soma = soma / 4;
// console.log(soma);
// soma = soma * 4;
// console.log(soma);








// // function nomeDaFuncao() {
// //     console.log( " isso é parte da minha função.");
// //     console.log("isso também é da função");    
// // }


// // function dizOla(nome, sobrenome) {
// //     console.log(`Olá ${nome} ${sobrenome}. Eu sou uma função que sei dizer olá.`);
// // }

// // nomeDaFuncao();
// // dizOla("Tafarel", "Chicotti");

// // let numero1 = readline.questionFloat( "Fale um numero:");
// // let operacao1 = readline.question( "Fale uma operacao:");
// // let numero2 = readline.questionFloat( "Fale um numero:");
// // // console.log(numero1 , operacao1 , numero2);
// // function soma( numero1, numero2) {
// //     return numero1 + numero2;
// //     function subtração( numero1, numero2) {
// //         return numero1 - numero2;
// //         function divisão( numero1, numero2) {
// //             return numero1 / numero2;
// //             function multiplicação( numero1, numero2) {
// //                 return numero1 * numero2;
// // }



// const readline = require('readline-sync');

// const numero1 = readline.questionInt("Informe o primeiro numero: ");
// const operacao = readline.question("Informe a operacao desejada (+ - * / ): ");
// const numero2 = readline.questionInt("Informe o segundo numero: ");
// let resultado;

// function soma(n1, n2) {
//     return n1 + n2;
// }

// function subtracao(n1, n2) {
//     return n1 - n2;
// }

// function multiplicacao(n1, n2) {
//     return n1 * n2;
// }

// function divisao(n1, n2) {
//     return n1 / n2;
// }

// if (operacao == "+") {
//     resultado = soma(numero1, numero2);
// } else if (operacao == "-") {
//     resultado = subtracao(numero1, numero2);
// } else if (operacao == "*") {
//     resultado = multiplicacao(numero1, numero2);
// } else if (operacao == "/") {
//     resultado = divisao(numero1, numero2);
// }

// console.log(`${numero1} ${operacao} ${numero2} = ${resultado}`);








//revisao


// let - Valores podem ser alterados
// const - Valores não podem ser alterados (CONSTANTE)

// <modificador> <nome da variavel> = <valor atribuido>
const nomePessoa = "José"

// String - Representa um Texto
const nome = "João"

// Integer - Representa um número que não possui casa decimal
const idade = 30

// Float  - Representa um número que possui casa decimal
const pi = 3.14

// Bool - Representa um valor lógico: verdadeiro (true) ou falso (false)
const ehBrasileiro = true

// NULL e UNDEFINED (Não pode ser utilizado com CONST)
// NULL - Representa um valor vazio. Atribuiu pelo menos vazio
let variavel = null

// UNDEFINED - Representa a falta de uma representação (Não possui nenhum valor atribuido)
let naoDefinido

// Object - Representa uma coleção de dados separados por Chave e Valor
const pessoa = {
    nome: "Maria",
    sobrenome: "Silva",
    idade: 19,
    endereco: {
        logradouro: "Rua Silva",
        numero: 340,
        complemento: "Frente"
    },
    salvar: function() {
        console.log("Só Jesus Salva!")
    }
}

// Um objeto é utilizado também para a criação de arquivos de configuração em Javascript.


// Array - É uma espécie de Objeto e serve como uma lista de elementos.
const arrayNomes = ["José", "Maria", "João", "Pedro"];
const valoresMisturados = ["Paulinho", 22, true, { status: true }]

// JSON - JavaScript Object Notation -> Notação Java Script de um Objeto
pessoa.nome // Acessei a propriedade NOME do objeto Pessoa
pessoa.salvar() // Chamei a função SALVAR do objeto Pessoa

// Toda vez que invocar uma função/método, devo abrir e fechar parênteses
// Toda vez que invocar uma propriedade, não preciso de parênteses.

// Estrutura de Condição - Bloco de código, que irá definir uma sequência de linhas a ser executada baseada em uma condição.
const condicao = pessoa.idade > 18;
if (condicao) {
    console.log("A pessoa é maior de idade")
} else {
    console.log("A pessoa não é maior de idade")
}

/**
 * Assumindo uma regra de IMC onde:
 * IMC entre 0 e 20 ---> S
 * IMC entre 21 e 40 --> O
 * IMC entre 41 e 60 --> V
 * IMC acima de 61 ----> SO
 */
const IMC = 37;
// && conector lógico E 
// || conector lógico OU
if (IMC >= 0 && IMC <= 20)  { // IF só existirá 1 (SE)
    console.log("S");
} else if (IMC >= 21 && IMC <= 40) { // ELSE IF podem existir quantos forem necessários (SENÃO SE)
    console.log("O");
} else if (IMC >= 41 && IMC <= 60) { // SENÃO SE
    console.log("V");
}else { // ELSE só existira 1 ou nenhum (SENÃO)
    console.log("SO");
}

/**
 * OPERADORES LÓGICOS
 *  >    MAIOR
 *  >=   MAIOR OU IGUAL
 *  <    MENOR
 *  <=   MENOR OU IGUAL
 *  !=   DIFERENTE
 *  ==   IGUAL A
 *  !    NEGAÇÃO (SE ESTÁ VERDADEIRO, VIRA FALSO E VICE-VERSA)
 */

/**
 * OPERADORES MATEMÁTICOS
 *  +   SOMA
 *  -   SUBTRAÇÃO
 *  *   MULTIPLICAÇÃO
 *  /   DIVISÃO
 *  %   RESTO
 *  **  EXPONENCIAÇÃO
 */

// Math é uma biblioteca/object em javascript para realizar operações matemáticas
Math.pow(2, 5); // é o equivalente a 2 elevado a 5
Math.max([2, 6, 3, 4]); // Retorna 6 - O maior valor
Math.min([2, 6, 3, 4]); // Retorna 2 - O menor valor
// trim - remove os espaços vazios do começo e do fim
// trimStart - remover os espaços vazios do começo apenas
// trimEnd - remove os espaços vazios do fim apenas

// Bloco de Repetição - WHILE, DO WHILE e FOR - Repetirão um bloco de código, quantas vezes for determinado.
// FOR - Quando eu sei quantas vezes eu preciso rodar o meu código.
// for (iniciador ; condição ; incrementador) 
for (let i = 0; i < 5; i++) {
    console.log(i) // Irá imprimir o i 5x
}

let j = 0; // iniciador fora do for
for ( ; j < 5; j++ ) { // deixei o iniciador vazio, pois foi declaro fora do for
    console.log(j);
}   

// WHILE - Quando eu não sei quantas vezes eu preciso rodar o meu código.
// while (condicao)
let contador = 0;
while (contador < 5) {
    console.log(contador) // Irá imprimir 5x
    contador = contador + 1 // Obrigatório mudar a minha condição constantemente, senão entrará em um laço de repetição eterno.
}

// DO WHILE - Quando eu não sei quantas vezes eu preciso rodar o meu código, mas preciso que ele seja executado pelo menos uma vez
// do { ... codigo  ... } while (condicao)
const SenhaSecreta = "senha123"
let senha = ""
do {
    // pedir a senha
    senha = "pedrin123"
} while (senha != SenhaSecreta); // Irá pedir a senha pelo menos 1x antes de talvez executar várias vezes ou somente aquela única vez.


// Como criar uma função

function nomeDaFuncaoSemRetorno(parametro) {
    // corpo da sua função
}
nomeDaFuncaoSemRetorno() // invocando a função

function somaDoisValores(n1, n2) {
    return n1 + n2 // Devolvendo os valores com o uso da palavra reservada return
}

// Se a função possuir retorno, guardar o resultado em uma variável ou exibir diretamente o resultado
const valorSoma = somaDoisValores(5, 10); // Guarda o retorno na variável valorSoma