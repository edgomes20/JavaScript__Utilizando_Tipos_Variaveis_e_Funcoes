/*
    1.Crie uma variável contendo uma frase. Em seguida, 
    exiba no console o comprimento da frase e a mesma frase em 
    constras maiúsculas.

    2.Declare duas variáveis, uma inicializada com valor null e 
    outra que não recebe atribuição (resultando em undefined). 
    Exiba os valores no console.

    3.Crie 3 variáveis de tipos diferentes, 
    utilize template strings para combinar os diferentes tipos de dados 
    (number, string, boolean) em uma única string e exiba o resultado 
    no console.

    4.Crie uma variável numérica e uma string. 
    Faça a conversão da variável numérica para string e 
    da string para número. 
    Exiba os tipos de dados resultantes no console.

    5.Crie uma variável com uma string e 
    utilize métodos de manipulação de strings, 
    como toUpperCase, toLowerCase, slice ou outros, 
    para modificar a string original. 
    Exiba os resultados finais no console.

*/

//Exercicio 1

console.log('EXERCICIO 1');
const frase = 'Olá Mundo';
console.log(frase.length);
console.log(frase.toUpperCase());

//Exercicio 2
console.log('EXERCICIO 2');
let frase2 = null;
let frase3;
console.log(frase2);
console.log(frase3);

//Exercicio 3
console.log('EXERCICIO 3');
const numero = 42;
const texto = ' é a resposta.';
const booleano = true;

const combinacao = `${numero} ${texto} É verdade? ${booleano}`;
console.log(combinacao);

//Exercicio 4
console.log('EXERCICIO 4');
const numero2 = 42;
const texto2 = '10';

const numeroConvertido = String(numero2);
const textoConvertido = Number(texto2);

console.log('Tipo de dado após conversão de número para string: ', typeof numeroConvertido);
console.log('Tipo de dado após conversão de string para número: ', typeof textoConvertido);

//Exercicio 5
console.log('EXERCICIO 5');
const texto3 = 'JavaScript é incrível!';

const maiusculas = texto3.toUpperCase();
const minusculas = texto3.toLowerCase();
const parteDaString = texto3.slice(0, 10);

console.log('Texto em maiúsculas:', maiusculas);
console.log('Texto em minúsculas:', minusculas);
console.log('Parte da string:', parteDaString);