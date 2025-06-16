// Parâmetros padrão
function multiplicar(a, b = 1) {
  return a * b;
}

// Escopo de variáveis
let global = "acessível em qualquer lugar";

function testeEscopo() {
  let local = "acessível apenas aqui";
  console.log(global); // funciona
}
// console.log(local); // erro