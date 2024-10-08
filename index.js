// var atual =2024;
// var nascimento=2008;

// console.log(atual - nascimento);

// soma +
// subtração -
// multiplicação *
// divisão /
//resto % 
//exponenciação **
// incremento por 1
// decremento por 1










// const nome = "Cauã";
// const sobrenome = 'Santos';
// const texto = `Colocar o texto`;
// const nomeCompleto = nome + ' ' + sobrenome
// const idade = 16
// const frase = "O nome da pessoa é: " + nomeCompleto + ". E sua idade é de " + idade + " anos"
// const frase2 = `O nome da pessoa é ${nomeCompleto}. E sua idade é ${idade} anos`;

// console.log(frase2)

// node index.js

// cls - clear screen, só é valido no windows -CMD/Powershell
// clear - # Linux / MacOS - Bash
//console.log() serve para chamar as funções 

// Nunca iniciar o nome com um número | var 1nome; (errado)
// Nunca acentuar a variávei | var profissão; (errado) | correto: var profissao;
// O único caracter especial aceito é o underline/underscore _ | var _nome; | var nome_profissao;
// Nunca separar por espaço, utilizar o underlin/underscore | 
// errado: var primeiro nome;  | correto: var primeiro_nome;
// snake_case: separados por underline/underscore.
// PascalCase: palavras iniciadas em letras maiúsculas.
// camelCase: palavras separadas iniciadas em letras maiúsculas.
// const nome = 'Joao';
// console.log("Para juntar" + " dois textos e uma variavel: " + nome );
// console.log(`Para juntar dois textos e uma variavel: ${nome}`);
// console.log("Para juntar dois textos e uma variavel: %s", nome);

//    %s   --- string
//    %d   --- digit
//    %o   --- object
// let tabuada = 8
// console.log("8x1=" + tabuada*1);
// console.log("8x2="+tabuada*2);
// console.log("8x3="+tabuada*3);
// console.log("8x4="+tabuada*4);
// console.log("8x5="+tabuada*5);
// console.log("8x6="+tabuada*6);
// console.log("8x7="+tabuada*7);
// console.log("8x8="+tabuada*8);
// console.log("8x9="+tabuada*9);
// console.log("8x10="+tabuada*10);



// npm install readline-sync
// const readline = require("readline-sync");

// const nome = readline.question("Qual o seu nome? ");
// const notas1 = readline.questionFloat("Qual a sua nota do 1 bimestre? ");
// const notas2 = readline.questionFloat("Qual a sua nota do 2 bimestre? ");
// const notas3 = readline.questionFloat("Qual a sua nota do 3 bimestre? ");
// const notas4 = readline.questionFloat("Qual a sua nota do 4 bimestre? ");

// readline.que

// console.log(`O nome informado foi: ${nome}, nota do 1 bimestre informada foi de ${notas1}, nota do 2 bimestre informada foi de ${notas2}, nota do 3 bimestre informada foi de ${notas3}, nota do 4 bimestre informada foi de ${notas4} `);
// console.log((notas1+notas2+notas3+notas4)/4);



/**
 * SOLICITE O NOME DO ALUNO(A) E SUAS 4 NOTAS BIMESTRAIS E CALCULE A MÉDIA FINAL
 */
const readline = require("readline-sync");

// Pegar o nome do aluno
const nome = readline.question("Qual o nome do aluno? ");
// Pegar as notas do aluno
const nota1 = readline.questionFloat("Qual a nota do 1 bimestre? ");
const nota2 = readline.questionFloat("Qual a nota do 2 bimestre? ");
const nota3 = readline.questionFloat("Qual a nota do 3 bimestre? ");
const nota4 = readline.questionFloat("Qual a nota do 4 bimestre? ");
// Calcular a média
const media = (nota1 + nota2 + nota3 + nota4) / 4;
// Exibir o resultado
console.log(`A media final do aluno ${nome} foi de: ${media.toFixed(2)}`);