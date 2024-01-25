/*
    1.Crie variáveis que armazenem o valor do saldo, 
    de depósito e de um saque de uma conta bancária, 
    depois realize operações de adição e subtração entre eles 
    utilizando uma variável chamada operacao, 
    considerando a função de cada variável criada anteriormente. 
    Exiba os resultados finais no console.

    2.Crie uma variável numérica com um valor. 
    Utilize um operador ternário para verificar se esse valor é 
    par ou ímpar. Exiba o resultado no console.

    3.Considere uma situação em que você está verificando se 
    um usuário está logado e tem permissão de administrador para 
    acessar determinada funcionalidade. Utilize variáveis 
    booleanas para simular essas condições e use o operador AND 
    para verificar se ambas são verdadeiras.

    4.Declare duas variáveis booleanas e use o operador OR para 
    verificar se pelo menos uma delas é verdadeira. 
    Exiba o resultado no console.

    5.Imagine um sistema que determina se um usuário tem idade 
    suficiente para comprar o ingresso para um show. 
    Declare duas variáveis que determinem a idade mínima e 
    qual a idade do usuário e utilize estruturas 
    condicionais (if, else) para determinar se o usuário 
    pode realizar a compra.

*/

//Exercicio 1
let saldo = 1000;
const saque = 50;
const deposito = 500;
const operacao = saldo - saque;

console.log('Saldo:', saldo); 
console.log('Saldo após saque:', operacao);onsole.log('Saldo insuficiente');

//Exercicio 2
let valor = 2;

const resultado = valor % 2 === 0 ? 'Par' : 'Ímpar';

console.log(resultado);

//Exercicio 3
const logado = true;
const admin = false;

const resultado3 = logado && admin;

console.log('Administrador logado no sistema:', resultado3);

//Exercicio 4
const condicao1 = true;
const condicao2 = false;

const resultado4 = condicao1 || condicao2;

console.log('Resultado do operador OR:', resultado4);

//Exercicio 5
const idadeMinima = 18;
const idadeUsuario = 21;

if (idadeUsuario >= idadeMinima) {
    console.log('Você pode comprar o ingresso. Bom show!');
} else {
    console.log('Você não tem idade suficiente para comprar o ingresso.');
}


