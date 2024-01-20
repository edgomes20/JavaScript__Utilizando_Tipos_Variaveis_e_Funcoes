/*
1.Declare três variáveis diferentes (uma para cada tipo: string, número e booleano) e atribua valores a elas. Em seguida, exiba o tipo de cada variável no console.

2.Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome. Em seguida, combine-as em uma terceira variável 
usando o operador + e em uma quarta variável usando template strings. Por fim, imprima os resultados obtidos no console.

3.Declare duas variáveis, uma contendo um número e outra contendo uma string. Em seguida, combine-as em uma terceira variável 
usando template strings para montar uma frase e exiba o resultado no console.

4.Crie uma variável inicializada com um valor de qualquer tipo e, em seguida, reatribua um novo valor a essa variável. 
Imprima ambos os valores no console após atribuí-los.

5.Declare uma variável usando var fora de um bloco de código (por exemplo, if) e outra dentro desse bloco. 
Tente acessar essas variáveis dentro do bloc e fora dele utilizando console.log e analise os resultados. Faça o mesmo processo utilizando let 
e compare com os resultados anteriores.

6.Declare uma variável booleana que informa se está chovendo e utilize-a em uma estrutura condicional (if) para exibir uma mensagem 
informando se é preciso levar um guarda-chuva ou não dependendo do valor da variável.
*/

//Exercicio 1
let nome = "Ed";
let idade = 38;
let estudando = true;

console.log(`Ola, meu nome e ${nome}, tenho ${idade} anos e minha situacao de estudando eh: ${estudando}!`);

//Exercicio 2
let primeiroNome = "Ed";
let segundoNome = " Gomes";
nome2 = primeiroNome + segundoNome;
console.log(`Ola, meu nome e ${nome2}!`);

//Exercicio 3
let numero = 10;
let id = "Id";
resultado = numero + id;;
console.log(`Ola, o resultado eh ${resultado}!`);

//Exercicio 4
let primeiro = 10;
primeiro =20;
console.log(primeiro);

//Exercicio 5
var teste1 = 10;

if (1 > 0){
    var teste1 = 20;
    console.log(teste1);
}

console.log(teste1);

let teste2 = 100;

if (1 > 0){
    let teste2 = 200;
    console.log(teste2);
}

console.log(teste2);

//Exercicio 6
let chuva = true;

if (chuva){
    console.log(`Leve seu guarda-chuva!`);
}
else{
    console.log(`Nao leve seu guarda-chuva!`);
}
