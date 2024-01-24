const estaAprovado = true;

if(estaAprovado === true){
    console.log("Aprovado");
}

if('0' == 0){
    console.log("Passou");
} else {
    console.log("Não passou");
}

if('0' === 0){
    console.log("Passou");
} else {
    console.log("Não passou");
}

const idadeMinima = 18;
const idadeEstudante = 16;

if(idadeEstudante >= idadeMinima){
    console.log("Precisa de autorização");
} else {
    console.log("Não precisa de autorização");
}