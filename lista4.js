/*
    1.Crie uma função que receba o nome de uma pessoa como argumento e 
    retorne uma saudação personalizada. 
    Em seguida, chame a função e exiba a saudação no console.

    2.Crie uma função que receba a idade de uma pessoa e retorne se 
    ela é maior de idade (idade >= 18). Imprima o resultado no console.

    3.Crie uma função que receba uma string e verifique se é um 
    palíndromo (uma palavra que é lida da mesma forma de trás para 
    frente) utilizando o método de string reverse(). 
    Retorne true se for um palíndromo e false caso contrário. 
    Imprima o resultado no console.

    4.Crie uma função que receba três números como parâmetros e 
    determine qual é o maior entre eles. Utilize estruturas 
    condicionais (if, else) para comparar os valores e 
    determinar o maior. Imprima o maior valor no console.

    5.Crie uma arrow function chamada calculaPotencia que receba 
    dois parâmetros: a base e o expoente. 
    A função deve calcular a potência da base elevada ao expoente e 
    retornar o resultado.
*/

//Exercicio 1
function saudacao (nome) {
    return console.log(`Olá ${nome}, seja bem-vinda!`);
}

saudacao('Ana');

//Exercicio 2
function resposta (idade) {
    return idade >= 18 ? console.log(`Maior de Idade`) : console.log(`Menor de Idade`);
}

resposta(18);

//Exercicio 3
function verificaPalindromo(string) {
    const stringInvertida = string.split('').reverse().join('');
    return string.toLowerCase() === stringInvertida.toLowerCase();
}

console.log(verificaPalindromo("arara")); 
console.log(verificaPalindromo("Frase")); 

//Exercicio 4
function encontraMaiorValor(num1, num2, num3) {
    let maior = num1; 
    if (num2 > maior) {
        maior = num2;
    }
  
    if (num3 > maior) {
        maior = num3;
    }
  
    return maior;
  }
  
  console.log(encontraMaiorValor(12, 56, 32));
  
  //Exercicio 5
  const calculaPotencia = (base, expoente) => {
    return Math.pow(base, expoente);
};

const base = 2;
const expoente = 3;

const resultado = calculaPotencia(base, expoente);
console.log(`O resultado de ${base} elevado a ${expoente} é: ${resultado}`); 