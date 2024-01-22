const estudante = "Caroline";
const docente = 'Ana';
const cumprimento = "Nosso lema eh 'Estudar Bastante'";
const citacao = `Ju diz: "Nosso lema eh 'Estudar Bastante'"`;

console.log(cumprimento);
console.log(citacao);

console.log('A estudante chama ' + estudante);

//Template Strings
console.log(`A estudante chama ${estudante}`);

const senha = 'SenhaSegura123' + estudante.toUpperCase();

console.log(senha);